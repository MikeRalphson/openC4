var fs = require('fs');
var nodePath = require('path');

var cheerio = require('cheerio');
var validator = require('is-my-json-valid');
var wrap = require('word-wrap');
var oa2js = require('openapi2js');

var swaggerSchema = require(nodePath.resolve('./validation/swagger2Schema.json'));
var atomSchema = require(nodePath.resolve('./validation/atomSchema.json'));

var api = {};
var swagger;
api.files = [];

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function clone(obj) {
	return JSON.parse(JSON.stringify(obj));
}

function clean(s) {
	var result = s.replaceAll('\n',' ');
	while (result.indexOf('  ')>=0) {
		result = result.replaceAll('  ',' ');
	}
	return result.trim();
}

function decorate(cols) {
	var desc = cols[1];
	var example = cols[2];
	if (example.indexOf(' or ')>0) {
		cols.push('enum '+example);
	}
	else if ((example === 'true') || (example === 'false') || (desc.startsWith('Boolean '))) {
		cols.push('boolean');
	}
	else if (example.startsWith('http')) {
		cols.push('uri');
	}
	else if ((!isNaN(Date.parse(example))) && (example.match(/....-.*/))) {
		cols.push('date');
	}
	else if ((!isNaN(parseInt(example,10))) && (example.indexOf('/') < 0) && (example.indexOf('.') < 0) && (example.indexOf(':') < 0)) {
		cols.push('integer');
	}
	else if ((!isNaN(parseFloat(example))) && (example.indexOf('/') < 0) && (example.indexOf(':') < 0)) {
		cols.push('number');
	}
	else {
		cols.push('string');
	}
}

function postProcess(src) {
	var result = {};
	result.score = 0;
	result.urls = [];
	result.sampleUrl = src.sample.replace(/apikey=(.*)/,function(match,group1){
		return 'apikey=xxxxxxxxxxxxxxxxxxxxxxxx';
	});
	result.feedDescription = '';
	result.parameters = [];
	result.feed = [];
	result.singleEntry = [];
	result.multipleEntry = [];

	for (var t in src.tables) {
		var table = src.tables[t];
		var tableFound = false;

		var target = result.feed;
		if (t == 3) {
			target = result.singleEntry;
			result.score++;
		}
		else if (t == 4) {
			target = result.multipleEntry;
			result.score++;
		}

		for (var r in table.rows) {
			var row = table.rows[r];
			var cols = row.columns;

			if (cols.length == 1) {
				var desc = cols[0];
				if (desc.indexOf('MULTIPLE')>=0) {
					if (target!=result.multipleEntry) result.score++;
					target = result.multipleEntry;
				}
				else {
					if (target!=result.singleEntry) result.score++;
					target = result.singleEntry;
				}
			}

			if (cols.length == 2) {
				if (cols[0] == 'Description') {
					result.feedDescription = cols[1];
					result.feedDescription = result.feedDescription.replace('Colletions','Collections');
					result.feedDescription = result.feedDescription.replace('purpouse','purpose');
					tableFound = true;
					result.score++;
				}
				else if ((cols[0] == 'URL') || (cols[0] == 'URLs')) {
					var url = cols[1];
					url = url.replaceAll(' OR ',' ');
					url = url.replaceAll('xxorhttp','xx http');
					url = url.replaceAll('series number','series_number');
					url = url.replaceAll('episode number','episode_number');
					url = url.replaceAll('episode number','episode_number');
					url = url.replaceAll('SERIES_SEQUENCE_NUMBER','series_number');
					url = url.replaceAll('EPISODE_SEQUENCE_NUMBER','episode_number');
					url = url.replaceAll('collection-name','collection_name');
					var urls = url.split(' ');

					if (urls[0].startsWith('http://api.channel4.com/pmlsd/categories/category/4od/popular.atom')) {
						urls[0] = urls[0].replace('/4od','[/4od]');
					}

					if (urls[0].indexOf('[/4od]')>0) {
						urls.push(urls[0].replace('[/4od]',''));
						urls[0] = urls[0].replace('[/4od]','/4od');
					}
					if (urls[0].indexOf('[yyyy/mm/dd]')>0) {
						urls[0] = urls[0].replace('[yyyy/mm/dd]','[yyyy]/[mm]/[dd]');
					}
					if (urls[0].startsWith('http://api.channel4.com/pmlsd/categories/category')) {
						urls.push(urls[0].replace('categories/category','categories/category/channel/[channel]'));
						urls.push(urls[0].replace('categories/category','categories/category/derived/ad'));
					}

					if ((urls[0].indexOf('/atoz/')>=0) || (urls[0].indexOf('/brands/')>0) || (urls[0].indexOf('/categories/')>0) ||
						(urls[0].indexOf('/search')>0)) {
						var tot = urls.length;
						for (var u=0;u<tot;u++) {
							if ((urls[u].indexOf('pageno')<0) && (urls[u].indexOf('.atom')>=0)) {
								urls.push(urls[u].replace('.atom','/page-{pageno}.atom'));
							}
						}
					}

					result.urls = Array.from(new Set(result.urls.concat(urls)));
					result.score++;
				}
				else if (cols[0] == 'Parameter') {
				}
				else if (cols[0] == 'Feed Elements') {
				}
				else if (cols[0] == 'Entry Elements') {
				}
				else {
					tableFound = true;
					var param = {};
					param.name = cols[0];
					param.name = param.name.replaceAll('series number','series_number');
					param.name = param.name.replaceAll('episode number','episode_number');
					param.name = param.name.replaceAll('SERIES_SEQUENCE_NUMBER','series_number');
					param.name = param.name.replaceAll('EPISODE_SEQUENCE_NUMBER','episode_number');
					param.name = param.name.replaceAll('collection name','collection_name');
					param.name = param.name.replaceAll('[','');
					param.name = param.name.replaceAll(']','');
					param.name = param.name.replaceAll('yyyy/mm/dd','yyyy');
					param.description = cols[1];
					if (param.name != '4od') {
						result.parameters.push(param);
						if (param.name == 'yyyy') {
							var param2 = clone(param);
							param2.name = 'mm';
							result.parameters.push(param2);
							var param3 = clone(param);
							param3.name = 'dd';
							result.parameters.push(param3);
						}
					}
					result.score++;
				}
			}

			if (cols.length == 4) {
				tableFound = true;
				var item = {};
				item.name = cols[0];
				if (item.name != 'Element') {
					item.description = cols[1];
					item.example = cols[2].replaceAll('xxorhttp','xx http');
					item.type = cols[3];
					target.push(item);
					result.score++;
				}
			}

		}

	}
	return result;
}

function processFile(filename){
	console.log(filename);

	var file = {};
	file.filename = filename;
	var fc = filename.split('-');
	file.group = fc[4].toLocaleLowerCase();
	file.operation = fc[5];
	file.summary = fc[5].replaceAll('_',' ');
	file.content = {};
	file.content.tables = [];

	var src = fs.readFileSync(filename,'utf8');
	var $ = cheerio.load(src);

	var tables = 0;
	var rows = 0;
	var cols = 0;

	$('h2').each(function(i,h2){
		var pre = $(h2).next().first().text();
		if (pre.startsWith('http')) {
			file.content.sample = pre;
		}
	});
	if (file.sample == '') {
		console.log('  No sample URL found');
	}

	var elements = $(".main table").each(function(i,table) {

		var ctable = {};
		ctable.rows = [];
		tables++;

		var row;

		var trs = $(table).children('tbody').children('tr').each(function(i,tr){
			rows++;

			row = {};
			row.columns = [];

			var tds = $(tr).children('td').each(function(i,td){
				cols++;
				var col = $(td).text();
				if (Array.isArray(col)) {
					//for (var c in col) {
					//	row.columns.push(clean(col[c]));
					//}
					row.columns.push(clean(col[0]));
				}
				else {
					row.columns.push(clean(col));
				}

				if (row.columns.length==3) {
					decorate(row.columns);
				}

			});
			ctable.rows.push(row);
		});
		file.content.tables.push(ctable);

	});

	file.output = postProcess(file.content);
	delete file.content;

	api.files.push(file);
}

function processPath(filespec){
	var files = fs.readdirSync(filespec).sort();
	for (var f in files) {
		var filename = files[f].toLocaleLowerCase();
		if ((filename.indexOf('feed')>=0) || (filename.indexOf('_by_')>=0)) {
			processFile('./apiSource/'+files[f]);
		}
	}
}

function definePath(file,url,suffix) {
	var path = {};
	path.get = {};
	path.get.description = wrap(file.output.feedDescription+'\n'+url+'\n'+file.output.sampleUrl,{width: 76}).trim();
	path.get.summary = file.summary+suffix;
	path.get.tags = [];
	path.get.tags.push(file.group);
	path.get.operationId = file.operation+suffix;
	path.get["x-documentation"] = file.filename.replace('./apiSource/','http://').replaceAll('-','/');
	path.get.produces = [];
	path.get.produces.push('application/xml');
	path.get.parameters = [];

	var param = {};
	param["$ref"] = '#/parameters/platform';
	path.get.parameters.push(param);

	path.get.responses = {};
	path.get.responses["200"] = {};
	path.get.responses["200"].description = 'Default response';
	path.get.responses["200"].schema = {};
	path.get.responses["200"].schema["$ref"] = '#/definitions/atom'
	//path.get.security = [];

	return path;
}

function addProperties(target,item) {
	if (item.name && target) {
		if (item.name.startsWith('link@')) return false;
		if (item.name.startsWith('Link@')) return false;
		var newProp = {};
		if (item.type == 'date') {
			newProp.type = 'string';
			newProp.format = 'date-time';
		}
		else if (item.type == 'uri') {
			newProp.type = 'string';
			newProp.format = 'uri';
		}
		else if (item.type.startsWith('enum ')) {
			var type = item.type.replace('enum ','');
			type = type.replaceAll(' or ',' ');
			type = type.replaceAll(' OR ',' ');
			var entries = type.split(' ');
			newProp.type = 'string';
			newProp["enum"] = entries;
		}
		else {
			newProp.type = item.type;
		}
		newProp.description = item.description;

		item.name = item.name.replaceAll('@','/').replaceAll('.','/');
		var path = item.name.split('/');
		if (path.length>1) {
			for (var p=0;p<path.length-1;p++) {
				var comp = path[p].trim();
				if ((!target[comp]) || (!target[comp].properties)) {
					var desc;
					if (target[comp] && target[comp].description) desc = target[comp].description;
					target[comp] = {};
					target[comp].type = 'object';
					if (desc) target[comp].description = desc;
					target[comp].properties = {};
				}
				target = target[comp].properties;
			}
			target[path[path.length-1].trim()] = newProp;
		}
		else {
			if ((target[item.name]) && (target[item.name]["$ref"])) {

			}
			else {
				target[item.name] = newProp;
			}
		}
	}
}

//____________________________________________________________________________
function traverse(obj,parent) {

var result = [];

	var array = Array.isArray(obj);
	for (var key in obj) {
		// skip loop if the property is from prototype
		if (!obj.hasOwnProperty(key)) continue;

		if (key == 'oneOf') {
			obj["x-oneOf"] = obj[key];
			delete obj[key];
		}

		if (key == 'anyOf') {
			obj["x-anyOf"] = obj[key];
			delete obj[key];
			if (parent.additionalProperties === false) {
				parent.additionalProperties = true;
			}
		}

		if (typeof obj[key] == 'object') {
			traverse(obj[key],obj);
		}
	}
	return result;
}

function generateSwagger(){
	for (var f in api.files) {
		var file = api.files[f];
		var donePageNo = false;
		for (var u in file.output.urls) {
			var url = file.output.urls[u];

			var queryString = '&'+url.split('?')[1];

			var suffix = '';
			if (u>0) {
				suffix = '('+(parseInt(u,10)+1)+')';
			}
			var path = definePath(file,url,suffix);
			url = url.split('?')[0];
			url = url.replace('http://api.channel4.com/pmlsd','');
			url = url.replaceAll('[','{');
			url = url.replaceAll(']','}');

			url = url.replace('/search-term','/{q}');

			if ((url.indexOf('{pageno}')>=0) && (!donePageNo)) {
				var pageno = {};
				pageno.name = 'pageno';
				pageno.description = 'Page number of results to return';
				pageno.type = 'integer';
				file.output.parameters.push(pageno);
				donePageNo = true;
			}
			if (url.indexOf('{channel}')>=0) {
				var found = false;
				for (var p in file.output.parameters) {
					var param = file.output.parameters[p];
					if (param.name == 'channel') found = true;
				}
				if (!found) {
					var channel = {};
					channel.name = 'channel';
					channel.description = 'The name of the channel for which you seek associated Channel 4oD programmes';
					file.output.parameters.push(channel);
				}
			}

			for (var p in file.output.parameters) {
				var param = file.output.parameters[p];
				if (param.name != 'apikey') {
					if (url.indexOf('{'+param.name+'}')<0) {
						url = url.replaceAll(param.name,'{'+param.name+'}');
					}
					var location = '';
					if (url.indexOf('{'+param.name+'}')>=0) location = 'path'
					else if (queryString.indexOf('&'+param.name)>=0) location = 'query';
					if (location) {
						var swagParam = {};
						swagParam.name = param.name;
						swagParam.type = (param.type ? param.type : 'string');
						swagParam["in"] = location;
						swagParam.required = true; //(location == 'path');
						swagParam.description = param.description;
						if (swagParam.name == 'channel') {
							swagParam["enum"] = ["c4","f4","e4","m4","4m","4s"];
						}
						path.get.parameters.push(swagParam);
					}
					else {
						if ((param.name.indexOf(' ')<0) && (param.name != 'Film') && (param.name != 'channel')) {
							console.log(file.operation+suffix+' omitted parameter: '+param.name);
						}
					}
				}
			}
			url = url.replaceAll('{{','{');
			url = url.replaceAll('}}','}');

			swagger.paths[url] = path;

			for (var i in file.output.feed) {
				if (file.output.feed[i].name != 'Entry Elements') {
					addProperties(swagger.definitions.feedType["x-anyOf"][1].properties,file.output.feed[i]);
				}
			}
			//swagger.definitions.feed.properties.entry = {"$ref": "#/definitions/entry"};
			for (var i in file.output.singleEntry) {
				addProperties(swagger.definitions.entryType["x-anyOf"][1].properties,file.output.singleEntry[i]);
			}
			for (var i in file.output.multipleEntry) {
				addProperties(swagger.definitions.entryType["x-anyOf"][1].properties,file.output.multipleEntry[i]);
			}
		}
	}
}

var swagStr = `{
	  "swagger": "2.0",
	  "info": {
		"version": "1.0.0",
		"title": "Channel 4 API",
		"x-logo": {
			"url": "http://www.channel4.com/static/programmes/images/c4-atom-logo.gif",
			"backgroundColor": "#FFFFFF"
		},
		"x-apiClientRegistration": {
			"url": "http://developer.channel4.com/apps/register"
		},
		"description": "This is the place to come for all the technical details you need to power your applications with Channel 4's deep programmes data.",
		"termsOfService": "http://developer.channel4.com/page/read/API_Terms_of_Use",
		"contact": {
		  "name": "Open C4 Project",
		  "email": "developer@channel4.co.uk",
		  "url": "http://developer.channel4.com/"
		},
		"license": {
		  "name": "Channel 4 API license",
		  "url": "http://developer.channel4.com/page/read/API_Terms_of_Use"
		}
	  },
	  "externalDocs": {
		"description": "Programmes API Guide",
		"url": "http://developer.channel4.com/docs/read/ProgrammesAPIGuide"
	  },
	  "host": "api.channel4.com",
	  "basePath": "/pmlsd",
	  "tags" : [{
			"name" : "discoveryresources",
			"description" : "Channel 4 data feeds"
		}, {
			"name" : "metadataresources",
			"description" : "Channel 4 metadata"
		}
	  ],
	  "schemes": [
		"http",
		"https"
	  ],
	  "consumes": [
		"application/xml"
	  ],
	  "produces": [
		"application/xml"
	  ],
	  "parameters": {
		"platform": {
		  "name": "platform",
		  "in": "query",
		  "description": "The platform to use for the query. Alias 'client'.",
		  "required": false,
		  "type": "string",
		  "enum": [
              "c4",
              "ps3",
              "yv",
              "ios",
			  "fm",
              "p06",
			  "ctv",
              "freesat",
              "android",
              "samsung"
		  ]
		}
	  },
	  "paths": {
	  },
	  "definitions": {
		  "atom": {
			  "type": "object"
		  }
	  },
      "securityDefinitions" : {
		"apikey" : {
			"type" : "apiKey",
			"name" : "apikey",
			"in" : "query"
		}
	  },
	  "security": [{
		  "apikey" : []
	  }]
	}`;
swagger = JSON.parse(swagStr);
delete atomSchema["$schema"];
delete atomSchema.id;
traverse(atomSchema,{});
swagger.definitions.atom = atomSchema;
var defs = swagger.definitions.atom.definitions;
delete swagger.definitions.atom.definitions;
swagger.definitions = Object.assign(swagger.definitions,defs);
delete swagger.definitions["x-anyOf"]; // for now

processPath('./apiSource');

process.on('exit', function(code) {
	fs.writeFileSync('./c4Api/api.json',JSON.stringify(api,null,2),'utf8');

	api.files = api.files.sort(function(x,y){
		if (x.output.urls[0]<y.output.urls[0]) {
			return -1;
		}
		if (x.output.urls[0]>y.output.urls[0]) {
			return +1;
		}
		return 0;
	});

	console.log();
	generateSwagger();

	console.log();
	console.log('Validating swagger spec...');
	var validate = validator(swaggerSchema);
	validate(swagger,{
		greedy: true,
		verbose: true
	});
	var errors = validate.errors;
	if (errors) {
		console.log(errors);
		fs.writeFileSync('./c4Api/swagger.err',JSON.stringify(swagger,null,'\t'),'utf8');
	}
	else {
		console.log('Writing swagger spec');
		fs.writeFileSync('./c4Api/swagger.json',JSON.stringify(swagger,null,'\t'),'utf8');
		console.log('Writing JS API definitions');
		oa2js.openAPI2js(swagger,'./c4Api/c4Api.js');
	}
});

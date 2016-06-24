var fs = require('fs');

var rr = require('recursive-readdir');
var cheerio = require('cheerio');

var api = {};
var swagger;
api.files = [];

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

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
		cols.push('float');
	}
	else {
		cols.push('string');
	}
}

function postProcess(src) {
	var result = {};
	result.score = 0;
	result.urls = [];
	result.sampleUrl = src.sample;
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
					url = url.replaceAll('series number','series_number');
					url = url.replaceAll('episode number','episode_number');
					var urls = url.split(' ');
					result.urls = result.urls.concat(urls);
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
					param.description = cols[1];
					result.parameters.push(param);
					result.score++;
				}
			}

			if (cols.length == 4) {
				tableFound = true;
				var item = {};
				item.name = cols[0];
				if (item.name != 'Element') {
					item.description = cols[1];
					item.example = cols[2];
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
	file.group = fc[4];
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
	rr(filespec, function (err, files) {
		for (var f in files) {
			var filename = files[f].toLocaleLowerCase();
			if ((filename.indexOf('feed')>=0) || (filename.indexOf('_by_')>=0)) {
				processFile(files[f]);
			}
		}
	});
}

function definePath(file,url,suffix) {
	var path = {};
	path.get = {};
	path.get.description = file.output.description;
	path.get.summary = file.summary+suffix;
	path.get.tags = [];
	path.get.tags.push(file.group);
	path.get.operationId = file.operation+suffix;
	path.get["x-documentation"] = file.filename.replace('apiSource\\','http://developer.channel4.com/');
	path.get.produces = [];
	path.get.produces.push = 'application/xml';
	path.get.parameters = [];
	path.get.responses = {};
	path.get.responses["200"] = {};
	path.get.responses["200"].description = 'Default response';
	path.get.responses["200"].schema = {};
	path.get.responses["200"].schema["$ref"] = '#/definitions/atom'
	path.get.security = [];

    /*      {
            "name": "pid",
            "in": "path",
            "required": true,
            "type": "string",
            "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
            "minLength": 8
          }, */

	return path;;
}

function generateSwagger(){
	for (var f in api.files) {
		var file = api.files[f];
		for (var u in file.output.urls) {
			var url = file.output.urls[u];
			var suffix = '';
			if (u>0) {
				suffix = '('+u+')';
			}
			var path = definePath(file,url,suffix);
			url = url.split('?')[0];
			url = url.replace('http://api.channel4.com/pmlsd','');
			swagger.paths[url] = path;
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
	  "host": "channel4.com",
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
	  "paths": {
	  },
	  "definitions": {
		  "atom": {
			  "type": "object",
			  "additionalProperties": true
		  }
	  },
      "securityDefinitions" : {
		"api_key" : {
			"type" : "apiKey",
			"name" : "api_key",
			"in" : "query"
		}
	  },
	  "security": [{
		  "api_key" : []
	  }]
	}`;
swagger = JSON.parse(swagStr);

processPath('./apiSource');

process.on('exit', function(code) {
	fs.writeFileSync('./c4Api/api.json',JSON.stringify(api,null,2),'utf8');

	generateSwagger();
	fs.writeFileSync('./c4Api/swagger.json',JSON.stringify(swagger,null,2),'utf8');
});

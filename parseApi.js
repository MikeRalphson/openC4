var fs = require('fs');

var rr = require('recursive-readdir');
var cheerio = require('cheerio');

var api = {};
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
	if ((example === 'true') || (example === 'false') || (desc.startsWith('Boolean '))) {
		cols.push('boolean');
	}
	else if (example.startsWith('http')) {
		cols.push('uri');
	}
	else if ((!isNaN(Date.parse(example))) && (example.match(/....-.*/))) {
		cols.push('date');
	}
	else if ((!isNaN(parseInt(example,10))) && (example.indexOf('/') < 0) && (example.indexOf(':') < 0)) {
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
	result.parameters = [];

	for (var t in src.tables) {
		var table = src.tables[t];
		for (var r in table.rows) {
			var row = table.rows[r];
			var cols = row.columns;
			if (cols.length == 2) {
				if (cols[0] == 'Description') {
					result.description = cols[1];
				}
				else if (cols[0] == 'URL') {
					result.url = cols[1];
				}
				else if (cols[0] == 'Parameter') {
				}
				else if (cols[0] == 'Feed Elements') {
				}
				else if (cols[0] == 'Entry Elements') {
				}
				else {
					var param = {};
					param.name = cols[0];
					param.description = cols[1];
					result.parameters.push(param);
				}
			}
		}
	}
	return result;
}

function processFile(filename){
	//console.log(filename);

	var file = {};
	file.filename = filename;
	file.content = {};
	file.content.tables = [];

	var src = fs.readFileSync(filename,'utf8');
	var $ = cheerio.load(src);

	var tables = 0;
	var rows = 0;
	var cols = 0;

	var elements = $(".main table").each(function(i,table) {
		//console.log('Have a table');
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
				//console.log(JSON.stringify(tr,null,2));
				var col = $(td).text();
				if (Array.isArray(col)) {
					//for (var c in col) {
					//	//console.log('---');
					//	//console.log(col[c]);
					//	row.columns.push(clean(col[c]));
					//}
					row.columns.push(clean(col[0]));
				}
				else {
					//console.log('+++');
					//console.log(col);
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

	api.files.push(file);
}

function processPath(filespec){
	rr(filespec, function (err, files) {
		for (var f in files) {
			processFile(files[f]);
		}
	});
}

//processPath('apiSource/*');
processFile('apiSource/developer.channel4.com-docs-read-programmesapiguide-discoveryresources-4oD_Browse_by_Date_Feed');

process.on('exit', function(code) {
	console.log(JSON.stringify(api,null,2));
});

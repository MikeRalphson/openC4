var fs = require('fs');
var cheerio = require("cheerio");
var request = require("request");

var seen = [];
var cookies = [];

function fetchPage(url, callback) {
	// Use request to read in pages.
	var options = {};
	options.uri = url;
	options.headers = {};
	options.headers.Referer = 'http://developer.channel4.com/docs/read/Home';
	options.headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36';
	options.headers.Cookie = 'MASH=f5afcc6507cda648e9269412176fd8a8';
	request(options, function (error, response, body) {
		if (error) {
			console.log("Error requesting page: " + error + ' '+url);
		}
		else {
			callback(body, url);
		}
	});
}

var processPage = function(body,url) {
	console.log('Processing page '+url);

	var filename = url.replace('http://','');
	filename = filename.replace('https://','');
	filename = filename.split('?')[0];
	filename = filename.split('/').join('-');
	filename = 'apiSource/'+filename;
	fs.writeFileSync(filename,body,'utf8');

	var $ = cheerio.load(body);
	var elements = $("a").each(function () {
		setTimeout(function(a){
			var newurl = $(a).attr('href');
			if ((newurl.indexOf('developer')>=0) && (newurl.indexOf('docs')>=0) && (seen.indexOf(newurl)<0)) {
				fetchPage(newurl,processPage);
			}
		},100,this);
	});
	seen.push(url);
}

// Use request to read in pages.
fetchPage("http://developer.channel4.com/docs/read/programmesapiguide/DiscoveryResources",processPage);

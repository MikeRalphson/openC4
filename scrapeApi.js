var fs = require('fs');
var cheerio = require("cheerio");
var request = require("request");
//var sqlite3 = require("sqlite3").verbose();

var seen = [];
var cookies = [];

function fetchPage(url, callback) {
	// Use request to read in pages.
	var options = {};
	options.uri = url;
	options.headers = {};
	options.headers.Referer = 'http://developer.channel4.com/docs/read/Home';
	options.headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36';
	options.headers.Cookie = 's_vi=[CS]v1|2B81729105013E1A-4000014A4008102F[CE]; __qca=P0-1402114298-1466031102050; MASH=88cfd69e2afa63aa53d068794d57a456; __utmt_mashery=1; __utma=195739449.2010631135.1466031103.1466031103.1466034261.2; __utmb=195739449.21.10.1466034261; __utmc=195739449; __utmz=195739449.1466031103.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)';
	//'s_vi=[CS]v1|2B81729105013E1A-4000014A4008102F[CE]; __qca=P0-1402114298-1466031102050; __utmt_mashery=1; MASH=88cfd69e2afa63aa53d068794d57a456; __utma=195739449.2010631135.1466031103.1466031103.1466031103.1; __utmb=195739449.4.10.1466031103; __utmc=195739449; __utmz=195739449.1466031103.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)';
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
	if ((url.indexOf('developer')>=0) && (seen.indexOf(url)<0)) {
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
				if ((newurl.indexOf('developer')>=0) && (seen.indexOf(newurl)<0)) {
					fetchPage(newurl,processPage);
				}
			},100,this);
		});
	}
	seen.push(url);
}

function run() {
	// Use request to read in pages.
	fetchPage("http://developer.channel4.com/docs/read/programmesapiguide/DiscoveryResources", function (body, url) {
		processPage(body,url);
	});
}

run();
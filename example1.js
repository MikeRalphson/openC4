var c4 = require('./c4Api/c4Api.js');
var nitro = require('bbcparse/nitroSdk.js');
var xml2j = require('jgexml/xml2json.js');

var query = nitro.newQuery();
query.add(c4.commonPlatformC4,'',true);

var options = {};
options.Accept = 'application/xml';
options.api_key_name = 'apikey';
nitro.make_request(c4.host,c4.getAtoz2('A'),process.env.C4_API_KEY,query,options,function(obj){
    var json = xml2j.xml2json(obj);
    console.log(JSON.stringify(json,null,2));
});

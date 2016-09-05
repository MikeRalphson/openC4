![OpenC4 - Channel 4 API SDK](https://github.com/Mermade/openC4/blob/master/logo/banner.png?raw=true)

OpenApi (Swagger) 2.0 and simple Javascript SDK for the (UK) Channel 4 API.

![logo](https://github.com/Mermade/openC4/blob/master/logo/C4_explosive.jpg?raw=true)

Compare:

* [Swagger UI](http://mermade.github.io/swagger/index.html?url=https://raw.githubusercontent.com/Mermade/openC4/master/c4Api/swagger.json) Generated from written documentation with numerous fixups 
* [Mashery IO docs](http://developer.channel4.com/io-docs) Official, hidden on C4 developer's page
 
1. node scrapeApi # to retrieve the raw API doc html, this has already been done for you
2. node parseApi # to produce c4Api/api.json, swagger.json and api.js, this has already been done for you
3. ??? # seriously, look at [BBCParse OpenNitroSDK](https://github.com/Mermade/bbcparse/blob/master/nitroSdk.js) and the [example in the wiki](https://github.com/Mermade/openC4/wiki)
4. profit

Generated [JSDoc](https://doclets.io/Mermade/openC4/master) courtesy of [doclets.io](http://doclets.io)

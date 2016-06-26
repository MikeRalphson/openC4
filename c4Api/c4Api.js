
/*   Lists Channel 4 programmes alphabetically from A to Z, providing the same 
  functionality and information as is available in the A to Z section of the 
  Channel 4 Programmes page, http://www.channel4.com/programmes.

  http://api.channel4.com/pmlsd/atoz.atom

  http://api.channel4.com/pmlsd/atoz.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
const getAtoz = '/pmlsd/atoz.atom';
const getAtozPlatform = 'platform';
const getAtozPlatformC4 = 'platform=c4';
const getAtozPlatformPs3 = 'platform=ps3';
const getAtozPlatformYv = 'platform=yv';
const getAtozPlatformIos = 'platform=ios';
const getAtozPlatformP06 = 'platform=p06';
const getAtozPlatformFlashmobile = 'platform=flashmobile';
const getAtozPlatformFreesat = 'platform=freesat';
const getAtozPlatformAndroid = 'platform=android';
const getAtozPlatformSamsung = 'platform=samsung';

/*   Lists Channel 4 programmes whose names begin with the associated letter.

  http://api.channel4.com/pmlsd/atoz/start_letter.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/atoz/a.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function getAtoz2(startLetter){
  var p = '/pmlsd/atoz/{start_letter}.atom';
  p = p.replace('{start_letter}',startLetter);
  return p;
}
const getAtoz2Platform = 'platform';
const getAtoz2PlatformC4 = 'platform=c4';
const getAtoz2PlatformPs3 = 'platform=ps3';
const getAtoz2PlatformYv = 'platform=yv';
const getAtoz2PlatformIos = 'platform=ios';
const getAtoz2PlatformP06 = 'platform=p06';
const getAtoz2PlatformFlashmobile = 'platform=flashmobile';
const getAtoz2PlatformFreesat = 'platform=freesat';
const getAtoz2PlatformAndroid = 'platform=android';
const getAtoz2PlatformSamsung = 'platform=samsung';

/*   Information of daily broadcast content available on 4oD, according to 
  broadcast date

  http://api.channel4.com/pmlsd/4od/episode-list/date/[yyyy]/[mm]/[dd].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/4od/episode-list/date/2010/11/28.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function get4odEpisodeListDate(yyyyMmDd){
  var p = '/pmlsd/4od/episode-list/date/{yyyy.mm.dd}.atom';
  p = p.replace('{yyyy.mm.dd}',yyyyMmDd);
  return p;
}
const get4odEpisodeListDatePlatform = 'platform';
const get4odEpisodeListDatePlatformC4 = 'platform=c4';
const get4odEpisodeListDatePlatformPs3 = 'platform=ps3';
const get4odEpisodeListDatePlatformYv = 'platform=yv';
const get4odEpisodeListDatePlatformIos = 'platform=ios';
const get4odEpisodeListDatePlatformP06 = 'platform=p06';
const get4odEpisodeListDatePlatformFlashmobile = 'platform=flashmobile';
const get4odEpisodeListDatePlatformFreesat = 'platform=freesat';
const get4odEpisodeListDatePlatformAndroid = 'platform=android';
const get4odEpisodeListDatePlatformSamsung = 'platform=samsung';

/*   A feed containing metadata about short-form content relating to 4oD Episodes 
  recently added to 4oD based on linear transmission. The entries for the 
  Clips Landing Feed contain references to each short-form asset. It will 
  return up to 20 entries.

  http://api.channel4.com/pmlsd/4od/recently-added/videos.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/4od/episode-list/videos.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
const get4odRecentlyAddedVideos = '/pmlsd/4od/recently-added/videos.atom';
const get4odRecentlyAddedVideosPlatform = 'platform';
const get4odRecentlyAddedVideosPlatformC4 = 'platform=c4';
const get4odRecentlyAddedVideosPlatformPs3 = 'platform=ps3';
const get4odRecentlyAddedVideosPlatformYv = 'platform=yv';
const get4odRecentlyAddedVideosPlatformIos = 'platform=ios';
const get4odRecentlyAddedVideosPlatformP06 = 'platform=p06';
const get4odRecentlyAddedVideosPlatformFlashmobile = 'platform=flashmobile';
const get4odRecentlyAddedVideosPlatformFreesat = 'platform=freesat';
const get4odRecentlyAddedVideosPlatformAndroid = 'platform=android';
const get4odRecentlyAddedVideosPlatformSamsung = 'platform=samsung';

/*   Information of the most popular content available on 4oD, according to user 
  data driven.

  http://api.channel4.com/pmlsd/4od/episode-list/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/4od/episode-list/popular.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
const get4odEpisodeListPopular = '/pmlsd/4od/episode-list/popular.atom';
const get4odEpisodeListPopularPlatform = 'platform';
const get4odEpisodeListPopularPlatformC4 = 'platform=c4';
const get4odEpisodeListPopularPlatformPs3 = 'platform=ps3';
const get4odEpisodeListPopularPlatformYv = 'platform=yv';
const get4odEpisodeListPopularPlatformIos = 'platform=ios';
const get4odEpisodeListPopularPlatformP06 = 'platform=p06';
const get4odEpisodeListPopularPlatformFlashmobile = 'platform=flashmobile';
const get4odEpisodeListPopularPlatformFreesat = 'platform=freesat';
const get4odEpisodeListPopularPlatformAndroid = 'platform=android';
const get4odEpisodeListPopularPlatformSamsung = 'platform=samsung';

/*   Lists all Channel 4 programmes available on 4oD by popularity considering 
  the data gathered within the last 7 days.

  http://api.channel4.com/pmlsd/brands/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/4od/popular.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
const getBrands4odPopular = '/pmlsd/brands/4od/popular.atom';
const getBrands4odPopularPlatform = 'platform';
const getBrands4odPopularPlatformC4 = 'platform=c4';
const getBrands4odPopularPlatformPs3 = 'platform=ps3';
const getBrands4odPopularPlatformYv = 'platform=yv';
const getBrands4odPopularPlatformIos = 'platform=ios';
const getBrands4odPopularPlatformP06 = 'platform=p06';
const getBrands4odPopularPlatformFlashmobile = 'platform=flashmobile';
const getBrands4odPopularPlatformFreesat = 'platform=freesat';
const getBrands4odPopularPlatformAndroid = 'platform=android';
const getBrands4odPopularPlatformSamsung = 'platform=samsung';

/*   Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function getCategories4od(category){
  var p = '/pmlsd/categories/{category}/4od.atom';
  p = p.replace('{category}',category);
  return p;
}
const getCategories4odPlatform = 'platform';
const getCategories4odPlatformC4 = 'platform=c4';
const getCategories4odPlatformPs3 = 'platform=ps3';
const getCategories4odPlatformYv = 'platform=yv';
const getCategories4odPlatformIos = 'platform=ios';
const getCategories4odPlatformP06 = 'platform=p06';
const getCategories4odPlatformFlashmobile = 'platform=flashmobile';
const getCategories4odPlatformFreesat = 'platform=freesat';
const getCategories4odPlatformAndroid = 'platform=android';
const getCategories4odPlatformSamsung = 'platform=samsung';

/*   Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/4od/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function getCategories4odTitle(category){
  var p = '/pmlsd/categories/{category}/4od/title.atom';
  p = p.replace('{category}',category);
  return p;
}
const getCategories4odTitlePlatform = 'platform';
const getCategories4odTitlePlatformC4 = 'platform=c4';
const getCategories4odTitlePlatformPs3 = 'platform=ps3';
const getCategories4odTitlePlatformYv = 'platform=yv';
const getCategories4odTitlePlatformIos = 'platform=ios';
const getCategories4odTitlePlatformP06 = 'platform=p06';
const getCategories4odTitlePlatformFlashmobile = 'platform=flashmobile';
const getCategories4odTitlePlatformFreesat = 'platform=freesat';
const getCategories4odTitlePlatformAndroid = 'platform=android';
const getCategories4odTitlePlatformSamsung = 'platform=samsung';

/*   Lists all Channel 4 programmes available on 4oD.  By default, the programmes 
  are listed by title in alphabetical order (case unsensitive).

  http://api.channel4.com/pmlsd/brands/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/4od.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
const getBrands4od = '/pmlsd/brands/4od.atom';
const getBrands4odPlatform = 'platform';
const getBrands4odPlatformC4 = 'platform=c4';
const getBrands4odPlatformPs3 = 'platform=ps3';
const getBrands4odPlatformYv = 'platform=yv';
const getBrands4odPlatformIos = 'platform=ios';
const getBrands4odPlatformP06 = 'platform=p06';
const getBrands4odPlatformFlashmobile = 'platform=flashmobile';
const getBrands4odPlatformFreesat = 'platform=freesat';
const getBrands4odPlatformAndroid = 'platform=android';
const getBrands4odPlatformSamsung = 'platform=samsung';

/*   Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function getCategories(category){
  var p = '/pmlsd/categories/{category}.atom';
  p = p.replace('{category}',category);
  return p;
}
const getCategoriesPlatform = 'platform';
const getCategoriesPlatformC4 = 'platform=c4';
const getCategoriesPlatformPs3 = 'platform=ps3';
const getCategoriesPlatformYv = 'platform=yv';
const getCategoriesPlatformIos = 'platform=ios';
const getCategoriesPlatformP06 = 'platform=p06';
const getCategoriesPlatformFlashmobile = 'platform=flashmobile';
const getCategoriesPlatformFreesat = 'platform=freesat';
const getCategoriesPlatformAndroid = 'platform=android';
const getCategoriesPlatformSamsung = 'platform=samsung';

/*   Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function getCategoriesTitle(category){
  var p = '/pmlsd/categories/{category}/title.atom';
  p = p.replace('{category}',category);
  return p;
}
const getCategoriesTitlePlatform = 'platform';
const getCategoriesTitlePlatformC4 = 'platform=c4';
const getCategoriesTitlePlatformPs3 = 'platform=ps3';
const getCategoriesTitlePlatformYv = 'platform=yv';
const getCategoriesTitlePlatformIos = 'platform=ios';
const getCategoriesTitlePlatformP06 = 'platform=p06';
const getCategoriesTitlePlatformFlashmobile = 'platform=flashmobile';
const getCategoriesTitlePlatformFreesat = 'platform=freesat';
const getCategoriesTitlePlatformAndroid = 'platform=android';
const getCategoriesTitlePlatformSamsung = 'platform=samsung';

/*   Lists Channel 4 programmes by category (/ tag).

  http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
const getCategories2 = '/pmlsd/categories.atom';
const getCategories2Platform = 'platform';
const getCategories2PlatformC4 = 'platform=c4';
const getCategories2PlatformPs3 = 'platform=ps3';
const getCategories2PlatformYv = 'platform=yv';
const getCategories2PlatformIos = 'platform=ios';
const getCategories2PlatformP06 = 'platform=p06';
const getCategories2PlatformFlashmobile = 'platform=flashmobile';
const getCategories2PlatformFreesat = 'platform=freesat';
const getCategories2PlatformAndroid = 'platform=android';
const getCategories2PlatformSamsung = 'platform=samsung';

/*   The Flattened Collections Feed is only applicable for GROUP collections and 
  its purpose is mainly return 3 items (BRAND, SERIES or EPSIODE) of each of 
  the simple collections assigned to the GROUP.

  http://api.channel4.com/pmlsd/collections/collection_name/flattened/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/collections/4od-home-promo/flattened/4od.atom?apikey=z4mwwux6yvahy4jz4xe3xe */
function getCollectionsFlattened4od(collectionName){
  var p = '/pmlsd/collections/{collection_name}/flattened/4od.atom';
  p = p.replace('{collection_name}',collectionName);
  return p;
}
const getCollectionsFlattened4odPlatform = 'platform';
const getCollectionsFlattened4odPlatformC4 = 'platform=c4';
const getCollectionsFlattened4odPlatformPs3 = 'platform=ps3';
const getCollectionsFlattened4odPlatformYv = 'platform=yv';
const getCollectionsFlattened4odPlatformIos = 'platform=ios';
const getCollectionsFlattened4odPlatformP06 = 'platform=p06';
const getCollectionsFlattened4odPlatformFlashmobile = 'platform=flashmobile';
const getCollectionsFlattened4odPlatformFreesat = 'platform=freesat';
const getCollectionsFlattened4odPlatformAndroid = 'platform=android';
const getCollectionsFlattened4odPlatformSamsung = 'platform=samsung';

/*   Collections are editorially controlled groups of brands, series, episodes or 
  other collections used for promotion and discovery of content. A SIMPLE 
  collection can contain an assortment of Brands, Series, Episodes or Freeform 
  items. A GROUP collection contains other collections.

  http://api.channel4.com/pmlsd/collections/collection_name/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/collections/4od-home-promo/4od.atom?apikey=z4mwwux6yvahy4jz4xe3xe */
function getCollections4od(collectionName){
  var p = '/pmlsd/collections/{collection_name}/4od.atom';
  p = p.replace('{collection_name}',collectionName);
  return p;
}
const getCollections4odPlatform = 'platform';
const getCollections4odPlatformC4 = 'platform=c4';
const getCollections4odPlatformPs3 = 'platform=ps3';
const getCollections4odPlatformYv = 'platform=yv';
const getCollections4odPlatformIos = 'platform=ios';
const getCollections4odPlatformP06 = 'platform=p06';
const getCollections4odPlatformFlashmobile = 'platform=flashmobile';
const getCollections4odPlatformFreesat = 'platform=freesat';
const getCollections4odPlatformAndroid = 'platform=android';
const getCollections4odPlatformSamsung = 'platform=samsung';

/*   Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function getCategories4odPopular(category){
  var p = '/pmlsd/categories/{category}/4od/popular.atom';
  p = p.replace('{category}',category);
  return p;
}
const getCategories4odPopularPlatform = 'platform';
const getCategories4odPopularPlatformC4 = 'platform=c4';
const getCategories4odPopularPlatformPs3 = 'platform=ps3';
const getCategories4odPopularPlatformYv = 'platform=yv';
const getCategories4odPopularPlatformIos = 'platform=ios';
const getCategories4odPopularPlatformP06 = 'platform=p06';
const getCategories4odPopularPlatformFlashmobile = 'platform=flashmobile';
const getCategories4odPopularPlatformFreesat = 'platform=freesat';
const getCategories4odPopularPlatformAndroid = 'platform=android';
const getCategories4odPopularPlatformSamsung = 'platform=samsung';

/*   Lists all Channel 4 programmes by popularity considering the data gathered 
  within the last 7 days.

  http://api.channel4.com/pmlsd/brands/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/popular.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
const getBrandsPopular = '/pmlsd/brands/popular.atom';
const getBrandsPopularPlatform = 'platform';
const getBrandsPopularPlatformC4 = 'platform=c4';
const getBrandsPopularPlatformPs3 = 'platform=ps3';
const getBrandsPopularPlatformYv = 'platform=yv';
const getBrandsPopularPlatformIos = 'platform=ios';
const getBrandsPopularPlatformP06 = 'platform=p06';
const getBrandsPopularPlatformFlashmobile = 'platform=flashmobile';
const getBrandsPopularPlatformFreesat = 'platform=freesat';
const getBrandsPopularPlatformAndroid = 'platform=android';
const getBrandsPopularPlatformSamsung = 'platform=samsung';

/*   EPG Information of daily broadcast content aired per channels, according to 
  broadcast date

  http://api.channel4.com/pmlsd/tv-listings/daily/[yyyy]/[mm]/[dd].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/tv-listings/daily/2010/11/28.atom?apikey=xxxxxxx */
function getTvListingsDaily(yyyyMmDd){
  var p = '/pmlsd/tv-listings/daily/{yyyy.mm.dd}.atom';
  p = p.replace('{yyyy.mm.dd}',yyyyMmDd);
  return p;
}
const getTvListingsDailyPlatform = 'platform';
const getTvListingsDailyPlatformC4 = 'platform=c4';
const getTvListingsDailyPlatformPs3 = 'platform=ps3';
const getTvListingsDailyPlatformYv = 'platform=yv';
const getTvListingsDailyPlatformIos = 'platform=ios';
const getTvListingsDailyPlatformP06 = 'platform=p06';
const getTvListingsDailyPlatformFlashmobile = 'platform=flashmobile';
const getTvListingsDailyPlatformFreesat = 'platform=freesat';
const getTvListingsDailyPlatformAndroid = 'platform=android';
const getTvListingsDailyPlatformSamsung = 'platform=samsung';

/*   EPG Information of daily broadcast content aired per channels, according to 
  broadcast date

  http://api.channel4.com/pmlsd/tv-listings/daily/[yyyy]/[mm]/[dd]/[channel].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/tv-listings/daily/2010/11/28.atom?apikey=xxxxxxx */
function getTvListingsDaily2(yyyyMmDd,channel){
  var p = '/pmlsd/tv-listings/daily/{yyyy.mm.dd}/{channel}.atom';
  p = p.replace('{yyyy.mm.dd}',yyyyMmDd);
  p = p.replace('{channel}',channel);
  return p;
}
const getTvListingsDaily2Platform = 'platform';
const getTvListingsDaily2PlatformC4 = 'platform=c4';
const getTvListingsDaily2PlatformPs3 = 'platform=ps3';
const getTvListingsDaily2PlatformYv = 'platform=yv';
const getTvListingsDaily2PlatformIos = 'platform=ios';
const getTvListingsDaily2PlatformP06 = 'platform=p06';
const getTvListingsDaily2PlatformFlashmobile = 'platform=flashmobile';
const getTvListingsDaily2PlatformFreesat = 'platform=freesat';
const getTvListingsDaily2PlatformAndroid = 'platform=android';
const getTvListingsDaily2PlatformSamsung = 'platform=samsung';

/*   Lists all Channel 4 programmes where title (brand name) matching the search 
  term. Matches are made from the beginning of individual words in the title.

  http://api.channel4.com/pmlsd/search.atom?q=search-term&apikey=xxx

  http://api.channel4.com/pmlsd/search.atom?q=the+it+crowd&apikey=z4mwwux6yvahy4jz4xe3xeb4 */
const getSearch = '/pmlsd/search.atom';
const getSearchPlatform = 'platform';
const getSearchPlatformC4 = 'platform=c4';
const getSearchPlatformPs3 = 'platform=ps3';
const getSearchPlatformYv = 'platform=yv';
const getSearchPlatformIos = 'platform=ios';
const getSearchPlatformP06 = 'platform=p06';
const getSearchPlatformFlashmobile = 'platform=flashmobile';
const getSearchPlatformFreesat = 'platform=freesat';
const getSearchPlatformAndroid = 'platform=android';
const getSearchPlatformSamsung = 'platform=samsung';
const getSearchQ = 'q';

/*   Lists all Channel 4 programmes where title (brand name) matching the search 
  term. Matches are made from the beginning of individual words in the title.

  http://api.channel4.com/pmlsd/search/search-term.atom?apikey=xxx

  http://api.channel4.com/pmlsd/search.atom?q=the+it+crowd&apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function getSearch2(q){
  var p = '/pmlsd/search/{q}.atom';
  p = p.replace('{q}',q);
  return p;
}
const getSearch2Platform = 'platform';
const getSearch2PlatformC4 = 'platform=c4';
const getSearch2PlatformPs3 = 'platform=ps3';
const getSearch2PlatformYv = 'platform=yv';
const getSearch2PlatformIos = 'platform=ios';
const getSearch2PlatformP06 = 'platform=p06';
const getSearch2PlatformFlashmobile = 'platform=flashmobile';
const getSearch2PlatformFreesat = 'platform=freesat';
const getSearch2PlatformAndroid = 'platform=android';
const getSearch2PlatformSamsung = 'platform=samsung';

/*   A feed containing all available on-demand long-form content for a specified 
  brand. The entries for the 4oD feed contain references to each long-form 
  asset for a brand, ordered by series number and episode number.

  http://api.channel4.com/pmlsd/[brand-web-safe-title]/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-it-crowd/4od.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function get4od(brandWebSafeTitle){
  var p = '/pmlsd/{brand-web-safe-title}/4od.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  return p;
}
const get4odPlatform = 'platform';
const get4odPlatformC4 = 'platform=c4';
const get4odPlatformPs3 = 'platform=ps3';
const get4odPlatformYv = 'platform=yv';
const get4odPlatformIos = 'platform=ios';
const get4odPlatformP06 = 'platform=p06';
const get4odPlatformFlashmobile = 'platform=flashmobile';
const get4odPlatformFreesat = 'platform=freesat';
const get4odPlatformAndroid = 'platform=android';
const get4odPlatformSamsung = 'platform=samsung';

/*   This feed contains metadata about upcoming electronic programme guide (EPG) 
  information for a brand. The entry details upcoming transmission slots for 
  this brand.

  http://api.channel4.com/pmlsd/brand-web-safe-title/epg.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-simpsons/epg.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function getEpg(brandWebSafeTitle){
  var p = '/pmlsd/{brand-web-safe-title}/epg.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  return p;
}
const getEpgPlatform = 'platform';
const getEpgPlatformC4 = 'platform=c4';
const getEpgPlatformPs3 = 'platform=ps3';
const getEpgPlatformYv = 'platform=yv';
const getEpgPlatformIos = 'platform=ios';
const getEpgPlatformP06 = 'platform=p06';
const getEpgPlatformFlashmobile = 'platform=flashmobile';
const getEpgPlatformFreesat = 'platform=freesat';
const getEpgPlatformAndroid = 'platform=android';
const getEpgPlatformSamsung = 'platform=samsung';

/*   A feed containing metadata about a single short-form video (clip).

  http://api.channel4.com/pmlsd/brand-web-safe-title/videos/clip-asset-id.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-it-crowd/videos/TCGS_CLIP_0000001015.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function getVideos(brandWebSafeTitle,clipAssetId){
  var p = '/pmlsd/{brand-web-safe-title}/videos/{clip-asset-id}.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  p = p.replace('{clip-asset-id}',clipAssetId);
  return p;
}
const getVideosPlatform = 'platform';
const getVideosPlatformC4 = 'platform=c4';
const getVideosPlatformPs3 = 'platform=ps3';
const getVideosPlatformYv = 'platform=yv';
const getVideosPlatformIos = 'platform=ios';
const getVideosPlatformP06 = 'platform=p06';
const getVideosPlatformFlashmobile = 'platform=flashmobile';
const getVideosPlatformFreesat = 'platform=freesat';
const getVideosPlatformAndroid = 'platform=android';
const getVideosPlatformSamsung = 'platform=samsung';

/*   A feed containing metadata about all the short-form (clip) videos. The clips 
  feed can be accessed at different levels: the content is then filtered 
  depending on the level, but the structure is identical.When accessed: from 
  the top, the feed contains all the clips for the brand;  at series level, 
  the feed contains only clips from the series; and  at episode level, the 
  feed contains only clips for the episode (and is very unlikely to require 
  pagination). The entries for the Clips Landing Feed contain references to 
  each short-form asset.

  http://api.channel4.com/pmlsd/brand-web-safe-title/videos/all.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/peep-show/videos.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function getVideosAll(brandWebSafeTitle){
  var p = '/pmlsd/{brand-web-safe-title}/videos/all.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  return p;
}
const getVideosAllPlatform = 'platform';
const getVideosAllPlatformC4 = 'platform=c4';
const getVideosAllPlatformPs3 = 'platform=ps3';
const getVideosAllPlatformYv = 'platform=yv';
const getVideosAllPlatformIos = 'platform=ios';
const getVideosAllPlatformP06 = 'platform=p06';
const getVideosAllPlatformFlashmobile = 'platform=flashmobile';
const getVideosAllPlatformFreesat = 'platform=freesat';
const getVideosAllPlatformAndroid = 'platform=android';
const getVideosAllPlatformSamsung = 'platform=samsung';

/*   A feed containing metadata about all the short-form (clip) videos. The clips 
  feed can be accessed at different levels: the content is then filtered 
  depending on the level, but the structure is identical.When accessed: from 
  the top, the feed contains all the clips for the brand;  at series level, 
  the feed contains only clips from the series; and  at episode level, the 
  feed contains only clips for the episode (and is very unlikely to require 
  pagination). The entries for the Clips Landing Feed contain references to 
  each short-form asset.

  http://api.channel4.com/pmlsd/brand-web-safe-title/videos/series-SERIES_SEQUENCE_NUMBER.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/peep-show/videos.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function getVideosSeries(brandWebSafeTitle,seriesSequenceNumber){
  var p = '/pmlsd/{brand-web-safe-title}/videos/series-{SERIES_SEQUENCE_NUMBER}.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  p = p.replace('{SERIES_SEQUENCE_NUMBER}',seriesSequenceNumber);
  return p;
}
const getVideosSeriesPlatform = 'platform';
const getVideosSeriesPlatformC4 = 'platform=c4';
const getVideosSeriesPlatformPs3 = 'platform=ps3';
const getVideosSeriesPlatformYv = 'platform=yv';
const getVideosSeriesPlatformIos = 'platform=ios';
const getVideosSeriesPlatformP06 = 'platform=p06';
const getVideosSeriesPlatformFlashmobile = 'platform=flashmobile';
const getVideosSeriesPlatformFreesat = 'platform=freesat';
const getVideosSeriesPlatformAndroid = 'platform=android';
const getVideosSeriesPlatformSamsung = 'platform=samsung';

/*   A feed containing metadata about all the short-form (clip) videos. The clips 
  feed can be accessed at different levels: the content is then filtered 
  depending on the level, but the structure is identical.When accessed: from 
  the top, the feed contains all the clips for the brand;  at series level, 
  the feed contains only clips from the series; and  at episode level, the 
  feed contains only clips for the episode (and is very unlikely to require 
  pagination). The entries for the Clips Landing Feed contain references to 
  each short-form asset.

  http://api.channel4.com/pmlsd/brand-web-safe-title/videos/series-SERIES_SEQUENCE_NUMBER/episode-EPISODE_SEQUENCE_NUMBER.atom?apikey=xxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/peep-show/videos.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function getVideosSeriesEpisode(brandWebSafeTitle,seriesSequenceNumber,episodeSequenceNumber){
  var p = '/pmlsd/{brand-web-safe-title}/videos/series-{SERIES_SEQUENCE_NUMBER}/episode-{EPISODE_SEQUENCE_NUMBER}.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  p = p.replace('{SERIES_SEQUENCE_NUMBER}',seriesSequenceNumber);
  p = p.replace('{EPISODE_SEQUENCE_NUMBER}',episodeSequenceNumber);
  return p;
}
const getVideosSeriesEpisodePlatform = 'platform';
const getVideosSeriesEpisodePlatformC4 = 'platform=c4';
const getVideosSeriesEpisodePlatformPs3 = 'platform=ps3';
const getVideosSeriesEpisodePlatformYv = 'platform=yv';
const getVideosSeriesEpisodePlatformIos = 'platform=ios';
const getVideosSeriesEpisodePlatformP06 = 'platform=p06';
const getVideosSeriesEpisodePlatformFlashmobile = 'platform=flashmobile';
const getVideosSeriesEpisodePlatformFreesat = 'platform=freesat';
const getVideosSeriesEpisodePlatformAndroid = 'platform=android';
const getVideosSeriesEpisodePlatformSamsung = 'platform=samsung';

/*   Coming Soon feed display a list of episodes coming soon to linear TV so that 
  I can promote new Channel 4 content.

  http://api.channel4.com/pmlsd/coming-soon.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/coming-soon.atom?apikey=xxxxxxx */
const getComingSoon = '/pmlsd/coming-soon.atom';
const getComingSoonPlatform = 'platform';
const getComingSoonPlatformC4 = 'platform=c4';
const getComingSoonPlatformPs3 = 'platform=ps3';
const getComingSoonPlatformYv = 'platform=yv';
const getComingSoonPlatformIos = 'platform=ios';
const getComingSoonPlatformP06 = 'platform=p06';
const getComingSoonPlatformFlashmobile = 'platform=flashmobile';
const getComingSoonPlatformFreesat = 'platform=freesat';
const getComingSoonPlatformAndroid = 'platform=android';
const getComingSoonPlatformSamsung = 'platform=samsung';

/*   Coming Soon feed display a list of episodes coming soon to linear TV so that 
  I can promote new Channel 4 content.

  http://api.channel4.com/pmlsd/coming-soon/[category].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/coming-soon.atom?apikey=xxxxxxx */
function getComingSoon2(category){
  var p = '/pmlsd/coming-soon/{category}.atom';
  p = p.replace('{category}',category);
  return p;
}
const getComingSoon2Platform = 'platform';
const getComingSoon2PlatformC4 = 'platform=c4';
const getComingSoon2PlatformPs3 = 'platform=ps3';
const getComingSoon2PlatformYv = 'platform=yv';
const getComingSoon2PlatformIos = 'platform=ios';
const getComingSoon2PlatformP06 = 'platform=p06';
const getComingSoon2PlatformFlashmobile = 'platform=flashmobile';
const getComingSoon2PlatformFreesat = 'platform=freesat';
const getComingSoon2PlatformAndroid = 'platform=android';
const getComingSoon2PlatformSamsung = 'platform=samsung';

/*   A feed containing metadata about a specified episode. (This feed does not 
  contain any entries and only contains a feed element regarding this 
  episode.)

  http://api.channel4.com/pmlsd/brand-web-safe-title/episode-guide/series-series_number/episode-episode_number.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-it-crowd/episode-guide/series-1/episode-1.atom?apikey=your-key */
function getEpisodeGuideSeriesEpisode(brandWebSafeTitle,seriesNumber,episodeNumber){
  var p = '/pmlsd/{brand-web-safe-title}/episode-guide/series-{series_number}/episode-{episode_number}.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  p = p.replace('{series_number}',seriesNumber);
  p = p.replace('{episode_number}',episodeNumber);
  return p;
}
const getEpisodeGuideSeriesEpisodePlatform = 'platform';
const getEpisodeGuideSeriesEpisodePlatformC4 = 'platform=c4';
const getEpisodeGuideSeriesEpisodePlatformPs3 = 'platform=ps3';
const getEpisodeGuideSeriesEpisodePlatformYv = 'platform=yv';
const getEpisodeGuideSeriesEpisodePlatformIos = 'platform=ios';
const getEpisodeGuideSeriesEpisodePlatformP06 = 'platform=p06';
const getEpisodeGuideSeriesEpisodePlatformFlashmobile = 'platform=flashmobile';
const getEpisodeGuideSeriesEpisodePlatformFreesat = 'platform=freesat';
const getEpisodeGuideSeriesEpisodePlatformAndroid = 'platform=android';
const getEpisodeGuideSeriesEpisodePlatformSamsung = 'platform=samsung';

/*   A feed containing metadata about all the episodes for a specific series. The 
  entries in this feed contain references to each of the episodes (where 
  metadata has been published), with some convenient links.

  http://api.channel4.com/pmlsd/brand-web-safe-title/episode-guide/series-series_number.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/chelmsford-123/episode-guide/series-1.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4	 */
function getEpisodeGuideSeries(brandWebSafeTitle,seriesNumber){
  var p = '/pmlsd/{brand-web-safe-title}/episode-guide/series-{series_number}.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  p = p.replace('{series_number}',seriesNumber);
  return p;
}
const getEpisodeGuideSeriesPlatform = 'platform';
const getEpisodeGuideSeriesPlatformC4 = 'platform=c4';
const getEpisodeGuideSeriesPlatformPs3 = 'platform=ps3';
const getEpisodeGuideSeriesPlatformYv = 'platform=yv';
const getEpisodeGuideSeriesPlatformIos = 'platform=ios';
const getEpisodeGuideSeriesPlatformP06 = 'platform=p06';
const getEpisodeGuideSeriesPlatformFlashmobile = 'platform=flashmobile';
const getEpisodeGuideSeriesPlatformFreesat = 'platform=freesat';
const getEpisodeGuideSeriesPlatformAndroid = 'platform=android';
const getEpisodeGuideSeriesPlatformSamsung = 'platform=samsung';

/*   A feed containing metadata about all series for a specified brand. The 
  entries in this feed contain references to each of the series (where 
  metadata has been published), with some convenient links.

  http://api.channel4.com/pmlsd/brand-web-safe-title/episode-guide.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/father-ted/episode-guide.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4	 */
function getEpisodeGuide(brandWebSafeTitle){
  var p = '/pmlsd/{brand-web-safe-title}/episode-guide.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  return p;
}
const getEpisodeGuidePlatform = 'platform';
const getEpisodeGuidePlatformC4 = 'platform=c4';
const getEpisodeGuidePlatformPs3 = 'platform=ps3';
const getEpisodeGuidePlatformYv = 'platform=yv';
const getEpisodeGuidePlatformIos = 'platform=ios';
const getEpisodeGuidePlatformP06 = 'platform=p06';
const getEpisodeGuidePlatformFlashmobile = 'platform=flashmobile';
const getEpisodeGuidePlatformFreesat = 'platform=freesat';
const getEpisodeGuidePlatformAndroid = 'platform=android';
const getEpisodeGuidePlatformSamsung = 'platform=samsung';

/*   The basis for all brand information

  http://api.channel4.com/pmlsd/brand-web-safe-title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-it-crowd.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function get(brandWebSafeTitle){
  var p = '/pmlsd/{brand-web-safe-title}.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  return p;
}
const getPlatform = 'platform';
const getPlatformC4 = 'platform=c4';
const getPlatformPs3 = 'platform=ps3';
const getPlatformYv = 'platform=yv';
const getPlatformIos = 'platform=ios';
const getPlatformP06 = 'platform=p06';
const getPlatformFlashmobile = 'platform=flashmobile';
const getPlatformFreesat = 'platform=freesat';
const getPlatformAndroid = 'platform=android';
const getPlatformSamsung = 'platform=samsung';

/*   A feed containing all long-form content currently or previously available 
  for a specified Programme Id. The entries for the Programme feed contain 
  references to long-form assets for each platform.

  http://api.channel4.com/pmlsd/programme/[programme-id].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/programme/33881-001/4od.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function getProgramme(programmeId){
  var p = '/pmlsd/programme/{programme-id}.atom';
  p = p.replace('{programme-id}',programmeId);
  return p;
}
const getProgrammePlatform = 'platform';
const getProgrammePlatformC4 = 'platform=c4';
const getProgrammePlatformPs3 = 'platform=ps3';
const getProgrammePlatformYv = 'platform=yv';
const getProgrammePlatformIos = 'platform=ios';
const getProgrammePlatformP06 = 'platform=p06';
const getProgrammePlatformFlashmobile = 'platform=flashmobile';
const getProgrammePlatformFreesat = 'platform=freesat';
const getProgrammePlatformAndroid = 'platform=android';
const getProgrammePlatformSamsung = 'platform=samsung';

module.exports = {
  getAtoz : getAtoz,
  getAtoz2 : getAtoz2,
  get4odEpisodeListDate : get4odEpisodeListDate,
  get4odRecentlyAddedVideos : get4odRecentlyAddedVideos,
  get4odEpisodeListPopular : get4odEpisodeListPopular,
  getBrands4odPopular : getBrands4odPopular,
  getCategories4od : getCategories4od,
  getCategories4odTitle : getCategories4odTitle,
  getBrands4od : getBrands4od,
  getCategories : getCategories,
  getCategoriesTitle : getCategoriesTitle,
  getCategories2 : getCategories2,
  getCollectionsFlattened4od : getCollectionsFlattened4od,
  getCollections4od : getCollections4od,
  getCategories4odPopular : getCategories4odPopular,
  getBrandsPopular : getBrandsPopular,
  getTvListingsDaily : getTvListingsDaily,
  getTvListingsDaily2 : getTvListingsDaily2,
  getSearch : getSearch,
  getSearch2 : getSearch2,
  get4od : get4od,
  getEpg : getEpg,
  getVideos : getVideos,
  getVideosAll : getVideosAll,
  getVideosSeries : getVideosSeries,
  getVideosSeriesEpisode : getVideosSeriesEpisode,
  getComingSoon : getComingSoon,
  getComingSoon2 : getComingSoon2,
  getEpisodeGuideSeriesEpisode : getEpisodeGuideSeriesEpisode,
  getEpisodeGuideSeries : getEpisodeGuideSeries,
  getEpisodeGuide : getEpisodeGuide,
  get : get,
  getProgramme : getProgramme,
  host : 'channel4.com'
};

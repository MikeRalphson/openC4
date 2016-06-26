const commonPlatform = 'platform';
const commonPlatformC4 = 'platform=c4';
const commonPlatformPs3 = 'platform=ps3';
const commonPlatformYv = 'platform=yv';
const commonPlatformIos = 'platform=ios';
const commonPlatformP06 = 'platform=p06';
const commonPlatformFlashmobile = 'platform=flashmobile';
const commonPlatformFreesat = 'platform=freesat';
const commonPlatformAndroid = 'platform=android';
const commonPlatformSamsung = 'platform=samsung';

/*   Lists Channel 4 programmes alphabetically from A to Z, providing the same 
  functionality and information as is available in the A to Z section of the 
  Channel 4 Programmes page, http://www.channel4.com/programmes.

  http://api.channel4.com/pmlsd/atoz.atom

  http://api.channel4.com/pmlsd/atoz.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
const getAtoz = '/pmlsd/atoz.atom';

/*   Lists Channel 4 programmes whose names begin with the associated letter.

  http://api.channel4.com/pmlsd/atoz/start_letter.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/atoz/a.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function getAtoz2(startLetter){
  var p = '/pmlsd/atoz/{start_letter}.atom';
  p = p.replace('{start_letter}',startLetter);
  return p;
}

/*   Information of daily broadcast content available on 4oD, according to 
  broadcast date

  http://api.channel4.com/pmlsd/4od/episode-list/date/[yyyy]/[mm]/[dd].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/4od/episode-list/date/2010/11/28.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function get4odEpisodeListDate(yyyyMmDd){
  var p = '/pmlsd/4od/episode-list/date/{yyyy.mm.dd}.atom';
  p = p.replace('{yyyy.mm.dd}',yyyyMmDd);
  return p;
}

/*   A feed containing metadata about short-form content relating to 4oD Episodes 
  recently added to 4oD based on linear transmission. The entries for the 
  Clips Landing Feed contain references to each short-form asset. It will 
  return up to 20 entries.

  http://api.channel4.com/pmlsd/4od/recently-added/videos.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/4od/episode-list/videos.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
const get4odRecentlyAddedVideos = '/pmlsd/4od/recently-added/videos.atom';

/*   Information of the most popular content available on 4oD, according to user 
  data driven.

  http://api.channel4.com/pmlsd/4od/episode-list/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/4od/episode-list/popular.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
const get4odEpisodeListPopular = '/pmlsd/4od/episode-list/popular.atom';

/*   Lists all Channel 4 programmes available on 4oD by popularity considering 
  the data gathered within the last 7 days.

  http://api.channel4.com/pmlsd/brands/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/4od/popular.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
const getBrands4odPopular = '/pmlsd/brands/4od/popular.atom';

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

/*   Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/4od/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function getCategories4odTitle(category){
  var p = '/pmlsd/categories/{category}/4od/title.atom';
  p = p.replace('{category}',category);
  return p;
}

/*   Lists all Channel 4 programmes available on 4oD.  By default, the programmes 
  are listed by title in alphabetical order (case unsensitive).

  http://api.channel4.com/pmlsd/brands/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/4od.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
const getBrands4od = '/pmlsd/brands/4od.atom';

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

/*   Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function getCategoriesTitle(category){
  var p = '/pmlsd/categories/{category}/title.atom';
  p = p.replace('{category}',category);
  return p;
}

/*   Lists Channel 4 programmes by category (/ tag).

  http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
const getCategories2 = '/pmlsd/categories.atom';

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

/*   Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function getCategories4odPopular(category){
  var p = '/pmlsd/categories/{category}/4od/popular.atom';
  p = p.replace('{category}',category);
  return p;
}

/*   Lists all Channel 4 programmes by popularity considering the data gathered 
  within the last 7 days.

  http://api.channel4.com/pmlsd/brands/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/popular.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
const getBrandsPopular = '/pmlsd/brands/popular.atom';

/*   Lists all Channel 4 programmes where title (brand name) matching the search 
  term. Matches are made from the beginning of individual words in the title.

  http://api.channel4.com/pmlsd/search.atom?q=search-term&apikey=xxx

  http://api.channel4.com/pmlsd/search.atom?q=the+it+crowd&apikey=z4mwwux6yvahy4jz4xe3xeb4 */
const getSearch = '/pmlsd/search.atom';
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

/*   EPG Information of daily broadcast content aired per channels, according to 
  broadcast date

  http://api.channel4.com/pmlsd/tv-listings/daily/[yyyy]/[mm]/[dd].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/tv-listings/daily/2010/11/28.atom?apikey=xxxxxxx */
function getTvListingsDaily(yyyyMmDd){
  var p = '/pmlsd/tv-listings/daily/{yyyy.mm.dd}.atom';
  p = p.replace('{yyyy.mm.dd}',yyyyMmDd);
  return p;
}

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

/*   A feed containing metadata about a single short-form video (clip).

  http://api.channel4.com/pmlsd/brand-web-safe-title/videos/clip-asset-id.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-it-crowd/videos/TCGS_CLIP_0000001015.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function getVideos(brandWebSafeTitle,clipAssetId){
  var p = '/pmlsd/{brand-web-safe-title}/videos/{clip-asset-id}.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  p = p.replace('{clip-asset-id}',clipAssetId);
  return p;
}

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

/*   Coming Soon feed display a list of episodes coming soon to linear TV so that 
  I can promote new Channel 4 content.

  http://api.channel4.com/pmlsd/coming-soon.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/coming-soon.atom?apikey=xxxxxxx */
const getComingSoon = '/pmlsd/coming-soon.atom';

/*   Coming Soon feed display a list of episodes coming soon to linear TV so that 
  I can promote new Channel 4 content.

  http://api.channel4.com/pmlsd/coming-soon/[category].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/coming-soon.atom?apikey=xxxxxxx */
function getComingSoon2(category){
  var p = '/pmlsd/coming-soon/{category}.atom';
  p = p.replace('{category}',category);
  return p;
}

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

/*   The basis for all brand information

  http://api.channel4.com/pmlsd/brand-web-safe-title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-it-crowd.atom?apikey=z4mwwux6yvahy4jz4xe3xeb4 */
function get(brandWebSafeTitle){
  var p = '/pmlsd/{brand-web-safe-title}.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  return p;
}

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
  getCollections4od : getCollections4od,
  getCollectionsFlattened4od : getCollectionsFlattened4od,
  getCategories4odPopular : getCategories4odPopular,
  getBrandsPopular : getBrandsPopular,
  getSearch : getSearch,
  getSearch2 : getSearch2,
  getTvListingsDaily : getTvListingsDaily,
  getTvListingsDaily2 : getTvListingsDaily2,
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

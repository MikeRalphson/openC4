/**
@author openapi2js http://github.com/mermade/openapi2js
@copyright Copyright (c) 2016 Mike Ralphson
@license https://opensource.org/licenses/BSD-3-Clause
*/
/** The platform to use for the query. Alias 'client'. */
const commonPlatform = 'platform';
const commonPlatformC4 = 'platform=c4';
const commonPlatformPs3 = 'platform=ps3';
const commonPlatformYv = 'platform=yv';
const commonPlatformIos = 'platform=ios';
const commonPlatformFm = 'platform=fm';
const commonPlatformP06 = 'platform=p06';
const commonPlatformCtv = 'platform=ctv';
const commonPlatformFreesat = 'platform=freesat';
const commonPlatformAndroid = 'platform=android';
const commonPlatformSamsung = 'platform=samsung';
/** The name of the channel for which you seek associated Channel 4oD programmes */
const commonChannelC4 = 'c4';
const commonChannelF4 = 'f4';
const commonChannelE4 = 'e4';
const commonChannelM4 = 'm4';
const commonChannel4m = '4m';
const commonChannel4s = '4s';
/** The programme name to look for, minimum length: 2 chars.Looking for programme names with special chars might be URL encoded. */
const commonQ = 'q';

/** Information of daily broadcast content available on 4oD, according to 
  broadcast date

  http://api.channel4.com/pmlsd/4od/episode-list/date/[yyyy]/[mm]/[dd].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/4od/episode-list/date/2010/11/28.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} yyyy The date for which you wish to see programming information
@param {string} mm The date for which you wish to see programming information
@param {string} dd The date for which you wish to see programming information
@return {string} The path to request
*/
function get4odEpisodeListDate(yyyy,mm,dd){
  var p = '/pmlsd/4od/episode-list/date/{yyyy}/{mm}/{dd}.atom';
  p = p.replace('{yyyy}',yyyy);
  p = p.replace('{mm}',mm);
  p = p.replace('{dd}',dd);
  return p;
}

/* Information of the most popular content available on 4oD, according to user 
  data driven.

  http://api.channel4.com/pmlsd/4od/episode-list/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/4od/episode-list/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx*/
const get4odEpisodeListPopular = '/pmlsd/4od/episode-list/popular.atom';

/* A feed containing metadata about short-form content relating to 4oD Episodes 
  recently added to 4oD based on linear transmission. The entries for the 
  Clips Landing Feed contain references to each short-form asset. It will 
  return up to 20 entries.

  http://api.channel4.com/pmlsd/4od/recently-added/videos.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/4od/episode-list/videos.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx*/
const get4odRecentlyAddedVideos = '/pmlsd/4od/recently-added/videos.atom';

/** A feed containing all available on-demand long-form content for a specified 
  brand. The entries for the 4oD feed contain references to each long-form 
  asset for a brand, ordered by series number and episode number.

  http://api.channel4.com/pmlsd/[brand-web-safe-title]/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-it-crowd/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} brand-web-safe-title The title of the programme for which you seek on-demand content
@return {string} The path to request
*/
function get4od(brandWebSafeTitle){
  var p = '/pmlsd/{brand-web-safe-title}/4od.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  return p;
}

/* Lists Channel 4 programmes alphabetically from A to Z, providing the same 
  functionality and information as is available in the A to Z section of the 
  Channel 4 Programmes page, http://www.channel4.com/programmes.

  http://api.channel4.com/pmlsd/atoz.atom

  http://api.channel4.com/pmlsd/atoz.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx*/
const getAtoz = '/pmlsd/atoz.atom';

/** Lists Channel 4 programmes whose names begin with the associated letter.

  http://api.channel4.com/pmlsd/atoz/start_letter.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/atoz/a.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} start_letter The letter of the alphabet for which you seek associated Channel 4 programmes
@return {string} The path to request
*/
function getAtoz2(startLetter){
  var p = '/pmlsd/atoz/{start_letter}.atom';
  p = p.replace('{start_letter}',startLetter);
  return p;
}

/** Lists Channel 4 programmes whose names begin with the associated letter.

  http://api.channel4.com/pmlsd/atoz/start_letter/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/atoz/a.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} start_letter The letter of the alphabet for which you seek associated Channel 4 programmes
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getAtozPage(startLetter,pageno){
  var p = '/pmlsd/atoz/{start_letter}/page-{pageno}.atom';
  p = p.replace('{start_letter}',startLetter);
  p = p.replace('{pageno}',pageno);
  return p;
}

/** The basis for all brand information

  http://api.channel4.com/pmlsd/brand-web-safe-title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-it-crowd.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} brand-web-safe-title The title of the programme for which you seek associated data
@return {string} The path to request
*/
function get(brandWebSafeTitle){
  var p = '/pmlsd/{brand-web-safe-title}.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  return p;
}

/** This feed contains metadata about upcoming electronic programme guide (EPG) 
  information for a brand. The entry details upcoming transmission slots for 
  this brand.

  http://api.channel4.com/pmlsd/brand-web-safe-title/epg.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-simpsons/epg.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} brand-web-safe-title Title of the programme for which you seek EPG information
@return {string} The path to request
*/
function getEpg(brandWebSafeTitle){
  var p = '/pmlsd/{brand-web-safe-title}/epg.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  return p;
}

/** A feed containing metadata about all series for a specified brand. The 
  entries in this feed contain references to each of the series (where 
  metadata has been published), with some convenient links.

  http://api.channel4.com/pmlsd/brand-web-safe-title/episode-guide.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/father-ted/episode-guide.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} brand-web-safe-title The title of the programme for which you seek episode-guide information
@return {string} The path to request
*/
function getEpisodeGuide(brandWebSafeTitle){
  var p = '/pmlsd/{brand-web-safe-title}/episode-guide.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  return p;
}

/** A feed containing metadata about all the episodes for a specific series. The 
  entries in this feed contain references to each of the episodes (where 
  metadata has been published), with some convenient links.

  http://api.channel4.com/pmlsd/brand-web-safe-title/episode-guide/series-series_number.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/chelmsford-123/episode-guide/series-1.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} brand-web-safe-title The title of the programme for which you seek series-related information
@param {string} series_number Unique enumerated identifier of the series within its brand
@return {string} The path to request
*/
function getEpisodeGuideSeries(brandWebSafeTitle,seriesNumber){
  var p = '/pmlsd/{brand-web-safe-title}/episode-guide/series-{series_number}.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  p = p.replace('{series_number}',seriesNumber);
  return p;
}

/** A feed containing metadata about a specified episode. (This feed does not 
  contain any entries and only contains a feed element regarding this 
  episode.)

  http://api.channel4.com/pmlsd/brand-web-safe-title/episode-guide/series-series_number/episode-episode_number.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-it-crowd/episode-guide/series-1/episode-1.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} brand-web-safe-title Title of the brand to which the episode belongs
@param {string} series_number Unique enumerated identifier of the series within its brand to which the episode belongs
@param {string} episode_number Unique enumerated identifier of the episode within its series
@return {string} The path to request
*/
function getEpisodeGuideSeriesEpisode(brandWebSafeTitle,seriesNumber,episodeNumber){
  var p = '/pmlsd/{brand-web-safe-title}/episode-guide/series-{series_number}/episode-{episode_number}.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  p = p.replace('{series_number}',seriesNumber);
  p = p.replace('{episode_number}',episodeNumber);
  return p;
}

/** A feed containing metadata about all the short-form (clip) videos. The clips 
  feed can be accessed at different levels: the content is then filtered 
  depending on the level, but the structure is identical.When accessed: from 
  the top, the feed contains all the clips for the brand;  at series level, 
  the feed contains only clips from the series; and  at episode level, the 
  feed contains only clips for the episode (and is very unlikely to require 
  pagination). The entries for the Clips Landing Feed contain references to 
  each short-form asset.

  http://api.channel4.com/pmlsd/brand-web-safe-title/videos/all.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/peep-show/videos.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} brand-web-safe-title Title of brand to which clips belong
@return {string} The path to request
*/
function getVideosAll(brandWebSafeTitle){
  var p = '/pmlsd/{brand-web-safe-title}/videos/all.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  return p;
}

/** A feed containing metadata about all the short-form (clip) videos. The clips 
  feed can be accessed at different levels: the content is then filtered 
  depending on the level, but the structure is identical.When accessed: from 
  the top, the feed contains all the clips for the brand;  at series level, 
  the feed contains only clips from the series; and  at episode level, the 
  feed contains only clips for the episode (and is very unlikely to require 
  pagination). The entries for the Clips Landing Feed contain references to 
  each short-form asset.

  http://api.channel4.com/pmlsd/brand-web-safe-title/videos/series-series_number.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/peep-show/videos.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} brand-web-safe-title Title of brand to which clips belong
@param {string} series_number Unique identifier of series to which clips belong
@return {string} The path to request
*/
function getVideosSeries(brandWebSafeTitle,seriesNumber){
  var p = '/pmlsd/{brand-web-safe-title}/videos/series-{series_number}.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  p = p.replace('{series_number}',seriesNumber);
  return p;
}

/** A feed containing metadata about all the short-form (clip) videos. The clips 
  feed can be accessed at different levels: the content is then filtered 
  depending on the level, but the structure is identical.When accessed: from 
  the top, the feed contains all the clips for the brand;  at series level, 
  the feed contains only clips from the series; and  at episode level, the 
  feed contains only clips for the episode (and is very unlikely to require 
  pagination). The entries for the Clips Landing Feed contain references to 
  each short-form asset.

  http://api.channel4.com/pmlsd/brand-web-safe-title/videos/series-series_number/episode-episode_number.atom?apikey=xxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/peep-show/videos.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} brand-web-safe-title Title of brand to which clips belong
@param {string} series_number Unique identifier of series to which clips belong
@param {string} episode_number Unique identifier of episode to which clips belong
@return {string} The path to request
*/
function getVideosSeriesEpisode(brandWebSafeTitle,seriesNumber,episodeNumber){
  var p = '/pmlsd/{brand-web-safe-title}/videos/series-{series_number}/episode-{episode_number}.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  p = p.replace('{series_number}',seriesNumber);
  p = p.replace('{episode_number}',episodeNumber);
  return p;
}

/** A feed containing metadata about a single short-form video (clip).

  http://api.channel4.com/pmlsd/brand-web-safe-title/videos/clip-asset-id.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-it-crowd/videos/TCGS_CLIP_0000001015.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} brand-web-safe-title Title of the brand for which you seek a clip
@param {string} clip-asset-id Asset id for this clip
@return {string} The path to request
*/
function getVideos(brandWebSafeTitle,clipAssetId){
  var p = '/pmlsd/{brand-web-safe-title}/videos/{clip-asset-id}.atom';
  p = p.replace('{brand-web-safe-title}',brandWebSafeTitle);
  p = p.replace('{clip-asset-id}',clipAssetId);
  return p;
}

/* Lists all Channel 4 programmes available on 4oD.  By default, the programmes 
  are listed by title in alphabetical order (case unsensitive).

  http://api.channel4.com/pmlsd/brands/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx*/
const getBrands4od = '/pmlsd/brands/4od.atom';

/** Lists all Channel 4 programmes available on 4oD.  By default, the programmes 
  are listed by title in alphabetical order (case unsensitive).

  http://api.channel4.com/pmlsd/brands/4od/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getBrands4odPage(pageno){
  var p = '/pmlsd/brands/4od/page-{pageno}.atom';
  p = p.replace('{pageno}',pageno);
  return p;
}

/* Lists all Channel 4 programmes available on 4oD by popularity considering 
  the data gathered within the last 7 days.

  http://api.channel4.com/pmlsd/brands/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx*/
const getBrands4odPopular = '/pmlsd/brands/4od/popular.atom';

/** Lists all Channel 4 programmes available on 4oD by popularity considering 
  the data gathered within the last 7 days.

  http://api.channel4.com/pmlsd/brands/4od/popular/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getBrands4odPopularPage(pageno){
  var p = '/pmlsd/brands/4od/popular/page-{pageno}.atom';
  p = p.replace('{pageno}',pageno);
  return p;
}

/* Lists all Channel 4 programmes by popularity considering the data gathered 
  within the last 7 days.

  http://api.channel4.com/pmlsd/brands/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx*/
const getBrandsPopular = '/pmlsd/brands/popular.atom';

/** Lists all Channel 4 programmes by popularity considering the data gathered 
  within the last 7 days.

  http://api.channel4.com/pmlsd/brands/popular/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getBrandsPopularPage(pageno){
  var p = '/pmlsd/brands/popular/page-{pageno}.atom';
  p = p.replace('{pageno}',pageno);
  return p;
}

/* Lists Channel 4 programmes by category (/ tag).

  http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx*/
const getCategories = '/pmlsd/categories.atom';

/** Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@return {string} The path to request
*/
function getCategories2(category){
  var p = '/pmlsd/categories/{category}.atom';
  p = p.replace('{category}',category);
  return p;
}

/** Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {string} channel The name of the channel for which you seek associated Channel 4oD programmes
@return {string} The path to request
*/
function getCategoriesChannel(category,channel){
  var p = '/pmlsd/categories/{category}/channel/{channel}.atom';
  p = p.replace('{category}',category);
  p = p.replace('{channel}',channel);
  return p;
}

/** Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/derived/ad.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@return {string} The path to request
*/
function getCategoriesDerivedAd(category){
  var p = '/pmlsd/categories/{category}/derived/ad.atom';
  p = p.replace('{category}',category);
  return p;
}

/** Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getCategoriesPage(category,pageno){
  var p = '/pmlsd/categories/{category}/page-{pageno}.atom';
  p = p.replace('{category}',category);
  p = p.replace('{pageno}',pageno);
  return p;
}

/** Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {string} channel The name of the channel for which you seek associated Channel 4oD programmes
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getCategoriesChannelPage(category,channel,pageno){
  var p = '/pmlsd/categories/{category}/channel/{channel}/page-{pageno}.atom';
  p = p.replace('{category}',category);
  p = p.replace('{channel}',channel);
  p = p.replace('{pageno}',pageno);
  return p;
}

/** Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getCategoriesDerivedAdPage(category,pageno){
  var p = '/pmlsd/categories/{category}/derived/ad/page-{pageno}.atom';
  p = p.replace('{category}',category);
  p = p.replace('{pageno}',pageno);
  return p;
}

/** Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@return {string} The path to request
*/
function getCategories4od(category){
  var p = '/pmlsd/categories/{category}/4od.atom';
  p = p.replace('{category}',category);
  return p;
}

/** Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {string} channel The name of the channel for which you seek associated Channel 4oD programmes
@return {string} The path to request
*/
function getCategoriesChannel4od(category,channel){
  var p = '/pmlsd/categories/{category}/channel/{channel}/4od.atom';
  p = p.replace('{category}',category);
  p = p.replace('{channel}',channel);
  return p;
}

/** Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@return {string} The path to request
*/
function getCategoriesDerivedAd4od(category){
  var p = '/pmlsd/categories/{category}/derived/ad/4od.atom';
  p = p.replace('{category}',category);
  return p;
}

/** Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/4od/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getCategories4odPage(category,pageno){
  var p = '/pmlsd/categories/{category}/4od/page-{pageno}.atom';
  p = p.replace('{category}',category);
  p = p.replace('{pageno}',pageno);
  return p;
}

/** Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/4od/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {string} channel The name of the channel for which you seek associated Channel 4oD programmes
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getCategoriesChannel4odPage(category,channel,pageno){
  var p = '/pmlsd/categories/{category}/channel/{channel}/4od/page-{pageno}.atom';
  p = p.replace('{category}',category);
  p = p.replace('{channel}',channel);
  p = p.replace('{pageno}',pageno);
  return p;
}

/** Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/4od/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getCategoriesDerivedAd4odPage(category,pageno){
  var p = '/pmlsd/categories/{category}/derived/ad/4od/page-{pageno}.atom';
  p = p.replace('{category}',category);
  p = p.replace('{pageno}',pageno);
  return p;
}

/** Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@return {string} The path to request
*/
function getCategories4odPopular(category){
  var p = '/pmlsd/categories/{category}/4od/popular.atom';
  p = p.replace('{category}',category);
  return p;
}

/** Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@return {string} The path to request
*/
function getCategoriesPopular(category){
  var p = '/pmlsd/categories/{category}/popular.atom';
  p = p.replace('{category}',category);
  return p;
}

/** Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {string} channel The name of the channel for which you seek associated Channel 4oD programmes
@return {string} The path to request
*/
function getCategoriesChannel4odPopular(category,channel){
  var p = '/pmlsd/categories/{category}/channel/{channel}/4od/popular.atom';
  p = p.replace('{category}',category);
  p = p.replace('{channel}',channel);
  return p;
}

/** Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@return {string} The path to request
*/
function getCategoriesDerivedAd4odPopular(category){
  var p = '/pmlsd/categories/{category}/derived/ad/4od/popular.atom';
  p = p.replace('{category}',category);
  return p;
}

/** Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/4od/popular/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getCategories4odPopularPage(category,pageno){
  var p = '/pmlsd/categories/{category}/4od/popular/page-{pageno}.atom';
  p = p.replace('{category}',category);
  p = p.replace('{pageno}',pageno);
  return p;
}

/** Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/popular/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getCategoriesPopularPage(category,pageno){
  var p = '/pmlsd/categories/{category}/popular/page-{pageno}.atom';
  p = p.replace('{category}',category);
  p = p.replace('{pageno}',pageno);
  return p;
}

/** Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/4od/popular/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {string} channel The name of the channel for which you seek associated Channel 4oD programmes
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getCategoriesChannel4odPopularPage(category,channel,pageno){
  var p = '/pmlsd/categories/{category}/channel/{channel}/4od/popular/page-{pageno}.atom';
  p = p.replace('{category}',category);
  p = p.replace('{channel}',channel);
  p = p.replace('{pageno}',pageno);
  return p;
}

/** Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/4od/popular/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getCategoriesDerivedAd4odPopularPage(category,pageno){
  var p = '/pmlsd/categories/{category}/derived/ad/4od/popular/page-{pageno}.atom';
  p = p.replace('{category}',category);
  p = p.replace('{pageno}',pageno);
  return p;
}

/** Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/4od/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@return {string} The path to request
*/
function getCategories4odTitle(category){
  var p = '/pmlsd/categories/{category}/4od/title.atom';
  p = p.replace('{category}',category);
  return p;
}

/** Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/4od/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {string} channel The name of the channel for which you seek associated Channel 4oD programmes
@return {string} The path to request
*/
function getCategoriesChannel4odTitle(category,channel){
  var p = '/pmlsd/categories/{category}/channel/{channel}/4od/title.atom';
  p = p.replace('{category}',category);
  p = p.replace('{channel}',channel);
  return p;
}

/** Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/4od/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@return {string} The path to request
*/
function getCategoriesDerivedAd4odTitle(category){
  var p = '/pmlsd/categories/{category}/derived/ad/4od/title.atom';
  p = p.replace('{category}',category);
  return p;
}

/** Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/4od/title/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getCategories4odTitlePage(category,pageno){
  var p = '/pmlsd/categories/{category}/4od/title/page-{pageno}.atom';
  p = p.replace('{category}',category);
  p = p.replace('{pageno}',pageno);
  return p;
}

/** Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/4od/title/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {string} channel The name of the channel for which you seek associated Channel 4oD programmes
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getCategoriesChannel4odTitlePage(category,channel,pageno){
  var p = '/pmlsd/categories/{category}/channel/{channel}/4od/title/page-{pageno}.atom';
  p = p.replace('{category}',category);
  p = p.replace('{channel}',channel);
  p = p.replace('{pageno}',pageno);
  return p;
}

/** Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/4od/title/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getCategoriesDerivedAd4odTitlePage(category,pageno){
  var p = '/pmlsd/categories/{category}/derived/ad/4od/title/page-{pageno}.atom';
  p = p.replace('{category}',category);
  p = p.replace('{pageno}',pageno);
  return p;
}

/** Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@return {string} The path to request
*/
function getCategoriesTitle(category){
  var p = '/pmlsd/categories/{category}/title.atom';
  p = p.replace('{category}',category);
  return p;
}

/** Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {string} channel The name of the channel for which you seek associated Channel 4oD programmes
@return {string} The path to request
*/
function getCategoriesChannelTitle(category,channel){
  var p = '/pmlsd/categories/{category}/channel/{channel}/title.atom';
  p = p.replace('{category}',category);
  p = p.replace('{channel}',channel);
  return p;
}

/** Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@return {string} The path to request
*/
function getCategoriesDerivedAdTitle(category){
  var p = '/pmlsd/categories/{category}/derived/ad/title.atom';
  p = p.replace('{category}',category);
  return p;
}

/** Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/title/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getCategoriesTitlePage(category,pageno){
  var p = '/pmlsd/categories/{category}/title/page-{pageno}.atom';
  p = p.replace('{category}',category);
  p = p.replace('{pageno}',pageno);
  return p;
}

/** Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/title/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {string} channel The name of the channel for which you seek associated Channel 4oD programmes
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getCategoriesChannelTitlePage(category,channel,pageno){
  var p = '/pmlsd/categories/{category}/channel/{channel}/title/page-{pageno}.atom';
  p = p.replace('{category}',category);
  p = p.replace('{channel}',channel);
  p = p.replace('{pageno}',pageno);
  return p;
}

/** Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/title/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getCategoriesDerivedAdTitlePage(category,pageno){
  var p = '/pmlsd/categories/{category}/derived/ad/title/page-{pageno}.atom';
  p = p.replace('{category}',category);
  p = p.replace('{pageno}',pageno);
  return p;
}

/** Collections are editorially controlled groups of brands, series, episodes or 
  other collections used for promotion and discovery of content. A SIMPLE 
  collection can contain an assortment of Brands, Series, Episodes or Freeform 
  items. A GROUP collection contains other collections.

  http://api.channel4.com/pmlsd/collections/collection_name/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/collections/4od-home-promo/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} collection_name Web safe title for the collection.
@return {string} The path to request
*/
function getCollections4od(collectionName){
  var p = '/pmlsd/collections/{collection_name}/4od.atom';
  p = p.replace('{collection_name}',collectionName);
  return p;
}

/** Collections are editorially controlled groups of brands, series, episodes or 
  other collections used for promotion and discovery of content. A SIMPLE 
  collection can contain an assortment of Brands, Series, Episodes or Freeform 
  items. A GROUP collection contains other collections.

  http://api.channel4.com/pmlsd/collections/collection_name.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/collections/4od-home-promo/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} collection_name Web safe title for the collection.
@return {string} The path to request
*/
function getCollections(collectionName){
  var p = '/pmlsd/collections/{collection_name}.atom';
  p = p.replace('{collection_name}',collectionName);
  return p;
}

/** The Flattened Collections Feed is only applicable for GROUP collections and 
  its purpose is mainly return 3 items (BRAND, SERIES or EPSIODE) of each of 
  the simple collections assigned to the GROUP.

  http://api.channel4.com/pmlsd/collections/collection_name/flattened/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/collections/4od-home-promo/flattened/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} collection_name Web safe title for the collection.
@return {string} The path to request
*/
function getCollectionsFlattened4od(collectionName){
  var p = '/pmlsd/collections/{collection_name}/flattened/4od.atom';
  p = p.replace('{collection_name}',collectionName);
  return p;
}

/** The Flattened Collections Feed is only applicable for GROUP collections and 
  its purpose is mainly return 3 items (BRAND, SERIES or EPSIODE) of each of 
  the simple collections assigned to the GROUP.

  http://api.channel4.com/pmlsd/collections/collection_name/flattened.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/collections/4od-home-promo/flattened/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} collection_name Web safe title for the collection.
@return {string} The path to request
*/
function getCollectionsFlattened(collectionName){
  var p = '/pmlsd/collections/{collection_name}/flattened.atom';
  p = p.replace('{collection_name}',collectionName);
  return p;
}

/* Coming Soon feed display a list of episodes coming soon to linear TV so that 
  I can promote new Channel 4 content.

  http://api.channel4.com/pmlsd/coming-soon.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/coming-soon.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx*/
const getComingSoon = '/pmlsd/coming-soon.atom';

/** Coming Soon feed display a list of episodes coming soon to linear TV so that 
  I can promote new Channel 4 content.

  http://api.channel4.com/pmlsd/coming-soon/[category].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/coming-soon.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} category The category websafe_title to filter the coming soon programmes on TV.
@return {string} The path to request
*/
function getComingSoon2(category){
  var p = '/pmlsd/coming-soon/{category}.atom';
  p = p.replace('{category}',category);
  return p;
}

/** A feed containing all long-form content currently or previously available 
  for a specified Programme Id. The entries for the Programme feed contain 
  references to long-form assets for each platform.

  http://api.channel4.com/pmlsd/programme/[programme-id].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/programme/33881-001/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} programme-id The websafe programme identifier for the episode for which you seek on-demand content
@return {string} The path to request
*/
function getProgramme(programmeId){
  var p = '/pmlsd/programme/{programme-id}.atom';
  p = p.replace('{programme-id}',programmeId);
  return p;
}

/* Lists all Channel 4 programmes where title (brand name) matching the search 
  term. Matches are made from the beginning of individual words in the title.

  http://api.channel4.com/pmlsd/search.atom?q=search-term&apikey=xxx

  http://api.channel4.com/pmlsd/search.atom?q=the+it+crowd&apikey=xxxxxxxxxxxxxxxxxxxxxxxx*/
const getSearch = '/pmlsd/search.atom';

/** Lists all Channel 4 programmes where title (brand name) matching the search 
  term. Matches are made from the beginning of individual words in the title.

  http://api.channel4.com/pmlsd/search/search-term.atom?apikey=xxx

  http://api.channel4.com/pmlsd/search.atom?q=the+it+crowd&apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} q The programme name to look for, minimum length: 2 chars.Looking for programme names with special chars might be URL encoded.
@return {string} The path to request
*/
function getSearch2(q){
  var p = '/pmlsd/search/{q}.atom';
  p = p.replace('{q}',q);
  return p;
}

/** Lists all Channel 4 programmes where title (brand name) matching the search 
  term. Matches are made from the beginning of individual words in the title.

  http://api.channel4.com/pmlsd/search/page-{pageno}.atom?q=search-term&apikey=xxx

  http://api.channel4.com/pmlsd/search.atom?q=the+it+crowd&apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getSearchPage(pageno){
  var p = '/pmlsd/search/page-{pageno}.atom';
  p = p.replace('{pageno}',pageno);
  return p;
}

/** Lists all Channel 4 programmes where title (brand name) matching the search 
  term. Matches are made from the beginning of individual words in the title.

  http://api.channel4.com/pmlsd/search/search-term/page-{pageno}.atom?apikey=xxx

  http://api.channel4.com/pmlsd/search.atom?q=the+it+crowd&apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} q The programme name to look for, minimum length: 2 chars.Looking for programme names with special chars might be URL encoded.
@param {integer} pageno Page number of results to return
@return {string} The path to request
*/
function getSearchPage2(q,pageno){
  var p = '/pmlsd/search/{q}/page-{pageno}.atom';
  p = p.replace('{q}',q);
  p = p.replace('{pageno}',pageno);
  return p;
}

/** EPG Information of daily broadcast content aired per channels, according to 
  broadcast date

  http://api.channel4.com/pmlsd/tv-listings/daily/[yyyy]/[mm]/[dd].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/tv-listings/daily/2010/11/28.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} yyyy The date for which you wish to see programming information. Note the schedule days start from 6am and run until 6am on the next calendar day.
@param {string} mm The date for which you wish to see programming information. Note the schedule days start from 6am and run until 6am on the next calendar day.
@param {string} dd The date for which you wish to see programming information. Note the schedule days start from 6am and run until 6am on the next calendar day.
@return {string} The path to request
*/
function getTvListingsDaily(yyyy,mm,dd){
  var p = '/pmlsd/tv-listings/daily/{yyyy}/{mm}/{dd}.atom';
  p = p.replace('{yyyy}',yyyy);
  p = p.replace('{mm}',mm);
  p = p.replace('{dd}',dd);
  return p;
}

/** EPG Information of daily broadcast content aired per channels, according to 
  broadcast date

  http://api.channel4.com/pmlsd/tv-listings/daily/[yyyy]/[mm]/[dd]/[channel].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/tv-listings/daily/2010/11/28.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx
@param {string} yyyy The date for which you wish to see programming information. Note the schedule days start from 6am and run until 6am on the next calendar day.
@param {string} mm The date for which you wish to see programming information. Note the schedule days start from 6am and run until 6am on the next calendar day.
@param {string} dd The date for which you wish to see programming information. Note the schedule days start from 6am and run until 6am on the next calendar day.
@param {string} channel The EPG for a specific channel (c4, e4, m4, 4m, f4, 4s)
@return {string} The path to request
*/
function getTvListingsDaily2(yyyy,mm,dd,channel){
  var p = '/pmlsd/tv-listings/daily/{yyyy}/{mm}/{dd}/{channel}.atom';
  p = p.replace('{yyyy}',yyyy);
  p = p.replace('{mm}',mm);
  p = p.replace('{dd}',dd);
  p = p.replace('{channel}',channel);
  return p;
}
/** The EPG for a specific channel (c4, e4, m4, 4m, f4, 4s) */
const getTvListingsDaily2ChannelC4 = 'c4';
const getTvListingsDaily2ChannelF4 = 'f4';
const getTvListingsDaily2ChannelE4 = 'e4';
const getTvListingsDaily2ChannelM4 = 'm4';
const getTvListingsDaily2Channel4m = '4m';
const getTvListingsDaily2Channel4s = '4s';

module.exports = {
  commonPlatform : commonPlatform,
  commonPlatformC4 : commonPlatformC4,
  commonPlatformPs3 : commonPlatformPs3,
  commonPlatformYv : commonPlatformYv,
  commonPlatformIos : commonPlatformIos,
  commonPlatformFm : commonPlatformFm,
  commonPlatformP06 : commonPlatformP06,
  commonPlatformCtv : commonPlatformCtv,
  commonPlatformFreesat : commonPlatformFreesat,
  commonPlatformAndroid : commonPlatformAndroid,
  commonPlatformSamsung : commonPlatformSamsung,
  commonChannelC4 : commonChannelC4,
  commonChannelF4 : commonChannelF4,
  commonChannelE4 : commonChannelE4,
  commonChannelM4 : commonChannelM4,
  commonChannel4m : commonChannel4m,
  commonChannel4s : commonChannel4s,
  commonQ : commonQ,
  get4odEpisodeListDate : get4odEpisodeListDate,
  get4odEpisodeListPopular : get4odEpisodeListPopular,
  get4odRecentlyAddedVideos : get4odRecentlyAddedVideos,
  get4od : get4od,
  getAtoz : getAtoz,
  getAtoz2 : getAtoz2,
  getAtozPage : getAtozPage,
  get : get,
  getEpg : getEpg,
  getEpisodeGuide : getEpisodeGuide,
  getEpisodeGuideSeries : getEpisodeGuideSeries,
  getEpisodeGuideSeriesEpisode : getEpisodeGuideSeriesEpisode,
  getVideosAll : getVideosAll,
  getVideosSeries : getVideosSeries,
  getVideosSeriesEpisode : getVideosSeriesEpisode,
  getVideos : getVideos,
  getBrands4od : getBrands4od,
  getBrands4odPage : getBrands4odPage,
  getBrands4odPopular : getBrands4odPopular,
  getBrands4odPopularPage : getBrands4odPopularPage,
  getBrandsPopular : getBrandsPopular,
  getBrandsPopularPage : getBrandsPopularPage,
  getCategories : getCategories,
  getCategories2 : getCategories2,
  getCategoriesChannel : getCategoriesChannel,
  getCategoriesDerivedAd : getCategoriesDerivedAd,
  getCategoriesPage : getCategoriesPage,
  getCategoriesChannelPage : getCategoriesChannelPage,
  getCategoriesDerivedAdPage : getCategoriesDerivedAdPage,
  getCategories4od : getCategories4od,
  getCategoriesChannel4od : getCategoriesChannel4od,
  getCategoriesDerivedAd4od : getCategoriesDerivedAd4od,
  getCategories4odPage : getCategories4odPage,
  getCategoriesChannel4odPage : getCategoriesChannel4odPage,
  getCategoriesDerivedAd4odPage : getCategoriesDerivedAd4odPage,
  getCategories4odPopular : getCategories4odPopular,
  getCategoriesPopular : getCategoriesPopular,
  getCategoriesChannel4odPopular : getCategoriesChannel4odPopular,
  getCategoriesDerivedAd4odPopular : getCategoriesDerivedAd4odPopular,
  getCategories4odPopularPage : getCategories4odPopularPage,
  getCategoriesPopularPage : getCategoriesPopularPage,
  getCategoriesChannel4odPopularPage : getCategoriesChannel4odPopularPage,
  getCategoriesDerivedAd4odPopularPage : getCategoriesDerivedAd4odPopularPage,
  getCategories4odTitle : getCategories4odTitle,
  getCategoriesChannel4odTitle : getCategoriesChannel4odTitle,
  getCategoriesDerivedAd4odTitle : getCategoriesDerivedAd4odTitle,
  getCategories4odTitlePage : getCategories4odTitlePage,
  getCategoriesChannel4odTitlePage : getCategoriesChannel4odTitlePage,
  getCategoriesDerivedAd4odTitlePage : getCategoriesDerivedAd4odTitlePage,
  getCategoriesTitle : getCategoriesTitle,
  getCategoriesChannelTitle : getCategoriesChannelTitle,
  getCategoriesDerivedAdTitle : getCategoriesDerivedAdTitle,
  getCategoriesTitlePage : getCategoriesTitlePage,
  getCategoriesChannelTitlePage : getCategoriesChannelTitlePage,
  getCategoriesDerivedAdTitlePage : getCategoriesDerivedAdTitlePage,
  getCollections4od : getCollections4od,
  getCollections : getCollections,
  getCollectionsFlattened4od : getCollectionsFlattened4od,
  getCollectionsFlattened : getCollectionsFlattened,
  getComingSoon : getComingSoon,
  getComingSoon2 : getComingSoon2,
  getProgramme : getProgramme,
  getSearch : getSearch,
  getSearch2 : getSearch2,
  getSearchPage : getSearchPage,
  getSearchPage2 : getSearchPage2,
  getTvListingsDaily : getTvListingsDaily,
  getTvListingsDaily2 : getTvListingsDaily2,
  getTvListingsDaily2ChannelC4 : getTvListingsDaily2ChannelC4,
  getTvListingsDaily2ChannelF4 : getTvListingsDaily2ChannelF4,
  getTvListingsDaily2ChannelE4 : getTvListingsDaily2ChannelE4,
  getTvListingsDaily2ChannelM4 : getTvListingsDaily2ChannelM4,
  getTvListingsDaily2Channel4m : getTvListingsDaily2Channel4m,
  getTvListingsDaily2Channel4s : getTvListingsDaily2Channel4s,
  host : 'api.channel4.com'
};

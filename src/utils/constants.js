const GOOGLE_API_KEY = 'AIzaSyAhQgCIwIlgaBZBg6bEaBxaeR7TbXckLfM'
const YOUTUBE_VIDEO_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' +
  GOOGLE_API_KEY
export default YOUTUBE_VIDEO_API

export const YOUTUBE_SEARCH_API =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

export const OFFSET_LIVE_CHAT = 20

export const YOUTUBE_VIDEO_API_US =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=' +
  GOOGLE_API_KEY

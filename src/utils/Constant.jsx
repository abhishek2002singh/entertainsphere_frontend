export const BASE_URL = "http://localhost:7777/user/v1"

export const GOOGLE_API_KEY="AIzaSyBrm82OayZReKnO4DiJdRqEI_nT38CxA3g"
export const YOUTUBE_SEARCH_API='http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

export const YOUTUBE_SEARCH_RESULTS_API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&contentDetails&type=video&maxResults=25&key=' + GOOGLE_API_KEY;

export const YOUTUBE_CHANNEL_API = (channelIds) =>
`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds}&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_VIDEO_DETAILS_API = (videoId) =>
`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${GOOGLE_API_KEY}`;

export const VIDEO_API='https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key='+GOOGLE_API_KEY;


 
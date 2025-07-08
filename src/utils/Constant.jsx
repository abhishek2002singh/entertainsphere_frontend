export const BASE_URL = "http://localhost:7777/user/v1"

export const GOOGLE_API_KEY='AIzaSyClyDOU4edKV1knNMHrYcnHmRmu7uGEa3E'
export const YOUTUBE_SEARCH_API='https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

export const YOUTUBE_SEARCH_RESULTS_API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&contentDetails&type=video&maxResults=25&key=' + GOOGLE_API_KEY;

export const YOUTUBE_CHANNEL_API ='https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id&key='+GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_DETAILS_API ='https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&key='+GOOGLE_API_KEY;

export const VIDEO_API='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+GOOGLE_API_KEY;

export const COMMENT_API='https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=';
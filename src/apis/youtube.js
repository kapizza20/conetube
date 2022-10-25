import axios from 'axios'

const KEY='AIzaSyD14ApJ4gMQ9lxxRBunUTBGDnO6ecVbUXM';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY,
    }
});

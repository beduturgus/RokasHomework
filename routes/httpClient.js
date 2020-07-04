let Flickr = require('flickr-sdk');

process.env.FLICKR_API_KEY = "00ac5f70d662304b87e7da585bbdef9d"

let flickr = new Flickr(process.env.FLICKR_API_KEY);

const myfunc = () => {
  flickr.photos.search({
    text: 'doggo'
  }).then((res) => {
    res.body.photos.photo.forEach((photo) => {
      console.log(photo.server)
    })
  }).catch((err) => {
    console.error('bonk', err);
  });
};


module.exports = {
  myfunc: myfunc
};
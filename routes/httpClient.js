let Flickr = require('flickr-sdk');
let flickr = new Flickr(process.env.FLICKR_API_KEY);

const myfunc = () => {
  flickr.photos.search({
    text: 'doggo'
  }).then((res) => {
    res.body.photos.photo.forEach((photo) => {
      //TODO Create dom element that display photos for each "photo" object looped
      /**
       *Please add code here
       *
       *
       *
       */
      console.log(photo.server)
    })
  }).catch((err) => {
    console.error('bonk', err);
  });
};


module.exports = {
  myfunc: myfunc
};
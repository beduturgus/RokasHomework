let Flickr = require('flickr-sdk');

process.env.FLICKR_API_KEY = "00ac5f70d662304b87e7da585bbdef9d"

let flickr = new Flickr(process.env.FLICKR_API_KEY);

const myfunc = () => {
  var address = [];
  flickr.photos.search({
    text: 'doggo'
  }).then((res) => {
    res.body.photos.photo.forEach((photo) => {
      
      let frmID = photo.farm;
      let srvID = photo.server;
      let phID = photo.id;
      let scrt = photo.secret;
      let photoAddress = 'https://farm'+frmID+'.staticflickr.com/'+srvID+'/'+phID+'_'+scrt+'.jpg';
      address.push(photoAddress);
      console.log(address);
      
      return address;
    })    
  }).catch((err) => {
    console.error('bonk', err);
  });
  
};

 
module.exports = {
  myfunc: myfunc
};
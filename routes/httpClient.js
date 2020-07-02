const axios = require('axios')

var myfunc = function(){
  console.log("kebab")
  let data = axios.get('https://flaviocopes.com/node-axios/')
  data.then((response) => {
    console.log(response.data)
  })
};


module.exports = {
  myfunc: myfunc
};;
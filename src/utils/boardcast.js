const request = require("request");

const boardcast = (callback) => {
  const url ='https://cricapi.com/api/cricketScore?apikey=USEYOURAPIKEY&unique_id=1249875'
  request({ url, json: true }, (error, response ) => {
    if (error) {
      callback("Unable to connect server", undefined);
    }else if (response.body.error) {
      callback("unable to get score.", undefined);
    }else {
      callback(
        (undefined),{
          score:response.body.score,
          stat:response.body.stat,
        });
    }
   // console.log(response.body)
  });
  
 };
module.exports = boardcast;

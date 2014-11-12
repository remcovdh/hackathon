exports.index = function(req, res) {
  requestBankDetails(res);
};

function requestBankDetails(res){

var http = require('http');

var options = {
  hostname:'ingcommonapi-test.apigee.net',
  path:'/commonapi/v0/es/me?apikey=BG0XkgyPUAaoyntDapDNHUuyNqAIdhCr',
  headers:{'Authorization': 'bearer eyJhbGciOiJSUzI1NiIsImN0eSI6InRleHRcL3BsYWluIn0.ZXlKaGJHY2lPaUprYVhJaUxDSjZhWEFpT2lKRVJVWWlMQ0psYm1NaU9pSkJNalUyUjBOTkluMC4uUTRsOGRGTTRZLXdmVjZpMS4waFZET1ZCWHRZZkRnR24xbHdUbHNSekcyQjg3TXFNOFJNVU1ld0w0RW1OUC12MVZza096WVJ0TlBDOXRWcVY5bmYzakV5NzZxZFhDTWlIUFplbHZUYXV3OTJMMXNjVDhXb2xORk05SUdpcXRsVWdQQmFlX3dOeXgzVGRFbXdvZTBOUHhwdzJ4ZkZianliX2Q3NXpaZGZVc3JSa3BfRTN3UVltcEFCY3RoNXY2bHhuMDl5VDBXUFNaYk93MTVBakl5c01pOGwxb3RvT2VuMnY5RkxlNHN3Lk5QLVZiWDhkQVczejdlYkxZS2l1Q2c.GQTeHRFi8YLmR5UwwztAimRvB0CEChPs6XAHHrO_T8XhYKvTwx1KOho4ivRciBlyFfchAmxCeRiwLwzX7EsOicOsk8gX9KlHOgCTAQ9FBPOMSYFn6PvlGzhRH3nDIIWvoNiue91Cu8fN_7revDmzSwdS2r00NZ0XJCFO5qBMcZA'
          }
}


callback=function (response){
  var str = '';


  response.on('data', function (chunk){
    str+=chunk;
  });


  response.on('end', function(){
  res.render('customerDetail', {
    title: 'Customer Details',
    customerDetail212:str
    });
  });
}
http.request(options,callback).end();
}

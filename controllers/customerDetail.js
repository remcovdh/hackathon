 var User = require('../models/User');

exports.index = function(req, res) {
                      User.findById(req.user._id, function(err, user) {
                                         var tokens =                           user.tokens;
                                         //console.log(tokens);


                                         var arrayLength = tokens.length;
                                         for (var i = 0; i < arrayLength; i++) {
                                                  if(tokens[i].kind == 'ing') {
                                                  ingToken = tokens[i].accessToken;
                                                   console.log(ingToken) ;
                                                   console.log("___________________")

                                                }

                                         }
                                          requestBankDetails(res);

                                 });


};

var ingToken = null;
var customerDetail1=null;
var customerDetail2=null;
var customerDetail3=null;
var customerDetail4=null;

function createOptions(pathValue){
  return {hostname:'ingcommonapi-test.apigee.net', path: pathValue,
  headers:{'Authorization': 'bearer eyJhbGciOiJSUzI1NiIsImN0eSI6InRleHRcL3BsYWluIn0.ZXlKaGJHY2lPaUprYVhJaUxDSjZhWEFpT2lKRVJVWWlMQ0psYm1NaU9pSkJNalUyUjBOTkluMC4uUTRsOGRGTTRZLXdmVjZpMS4waFZET1ZCWHRZZkRnR24xbHdUbHNSekcyQjg3TXFNOFJNVU1ld0w0RW1OUC12MVZza096WVJ0TlBDOXRWcVY5bmYzakV5NzZxZFhDTWlIUFplbHZUYXV3OTJMMXNjVDhXb2xORk05SUdpcXRsVWdQQmFlX3dOeXgzVGRFbXdvZTBOUHhwdzJ4ZkZianliX2Q3NXpaZGZVc3JSa3BfRTN3UVltcEFCY3RoNXY2bHhuMDl5VDBXUFNaYk93MTVBakl5c01pOGwxb3RvT2VuMnY5RkxlNHN3Lk5QLVZiWDhkQVczejdlYkxZS2l1Q2c.GQTeHRFi8YLmR5UwwztAimRvB0CEChPs6XAHHrO_T8XhYKvTwx1KOho4ivRciBlyFfchAmxCeRiwLwzX7EsOicOsk8gX9KlHOgCTAQ9FBPOMSYFn6PvlGzhRH3nDIIWvoNiue91Cu8fN_7revDmzSwdS2r00NZ0XJCFO5qBMcZA'
          }}
}

function requestBankDetails(res){

var http = require('http');

http.request(
  createOptions('/commonapi/v0/es/me?apikey=BG0XkgyPUAaoyntDapDNHUuyNqAIdhCr')
  ,function (response){
    var str = '';

    response.on('data', function (chunk){
      str+=chunk;
    });

    response.on('end', function(){
        customerDetail1=str;
        complete();
      }
    );
  }).end();

  http.request(
    createOptions('/commonapi/v0/es/persons/INGESRIv01-enc-ZLl_OaUMtHhc9Fb5ehNMQvXXdKlAorlzKIbXsyLlI9ZujyWzHEBC-l5JIAx3wjcZkBPWmkx2T_BnaOonul5QMD3P1MJxpfPrY2EMx6wcvBY/products?apikey=BG0XkgyPUAaoyntDapDNHUuyNqAIdhCr')
    ,function (response){
      var str = '';

      response.on('data', function (chunk){
        str+=chunk;
      });

      response.on('end', function(){
          customerDetail4=str
        }
      );
    }).end();

var test1 = createOptions('/commonapi/v0/es/persons/INGESRIv01-enc-ZLl_OaUMtHhc9Fb5ehNMQvXXdKlAorlzKIbXsyLlI9ZujyWzHEBC-l5JIAx3wjcZkBPWmkx2T_BnaOonul5QMD3P1MJxpfPrY2EMx6wcvBY?apikey=BG0XkgyPUAaoyntDapDNHUuyNqAIdhCr');
  console.log(test1);
  http.request(test1
  ,function(response){
    var str = '';


    response.on('data', function (chunk){
      str+=chunk;
    });

    response.on('end', function(){
    customerDetail2=JSON.parse(str);
    customerDetailX=JSON.stringify(str);
    complete();
    }
  );
}).end()

var url2 = createOptions('/commonapi/v0/es/persons/INGESRIv01-enc-ZLl_OaUMtHhc9Fb5ehNMQvXXdKlAorlzKIbXsyLlI9ZujyWzHEBC-l5JIAx3wjcZkBPWmkx2T_BnaOonul5QMD3P1MJxpfPrY2EMx6wcvBY/products?apikey=BG0XkgyPUAaoyntDapDNHUuyNqAIdhCr')
http.request(test1
,function(response){
  var str = '';

  response.on('data', function (chunk){
    str+=chunk;
  });

  response.on('end', function(){
  customerDetail3=str;
  complete();
  }
);
}).end()

function complete(){
  if(customerDetail1!==null && customerDetail2!==null && customerDetail3!==null && customerDetail4!==null){
    res.render('customerDetail', {
      title: 'Customer Details',
      viewCustomerDetail1:customerDetail1,
      viewCustomerDetail2:customerDetail2,
      viewCustomerDetailX:customerDetailX,
      viewCustomerDetail3:customerDetail3,
      viewCustomerDetail4:customerDetail4
      });
    };
  }
}

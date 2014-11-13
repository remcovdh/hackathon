exports.index = function(req, res) {
  requestBankDetails(res);
};

exports.postAccept = function(req, res) {
  console.log("DAS:FLKSA:FAS:LFJAS:FJALS:FJAS:");
};

var customerDetail1=null;
var customerDetail2=null;
var customerDetail3=null;
var customerDetail4=null;

customerDetailX2=null;
customerDetailX3=null;
customerDetailX4=null;

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
    var str1 = '';

    response.on('data', function (chunk){
      str1+=chunk;
    });

    response.on('end', function(){
        console.log('customerDetail1');
        customerDetail1=str1;
        complete();
      }
    );
  }).end();

http.request(
 createOptions('/commonapi/v0/es/persons/INGESRIv01-enc-ZLl_OaUMtHhc9Fb5ehNMQvXXdKlAorlzKIbXsyLlI9ZujyWzHEBC-l5JIAx3wjcZkBPWmkx2T_BnaOonul5QMD3P1MJxpfPrY2EMx6wcvBY?apikey=BG0XkgyPUAaoyntDapDNHUuyNqAIdhCr')
	
  ,function(response){
    var str2 = '';

    response.on('data', function (chunk){
      str2+=chunk;
    });

    response.on('end', function(){
      console.log('customerDetail2');
      customerDetail2=str2;
      customerDetailX2=JSON.parse(str2);
      complete();
    }
  );
}).end()

http.request(
	createOptions('/commonapi/v0/es/persons/INGESRIv01-enc-ZLl_OaUMtHhc9Fb5ehNMQvXXdKlAorlzKIbXsyLlI9ZujyWzHEBC-l5JIAx3wjcZkBPWmkx2T_BnaOonul5QMD3P1MJxpfPrY2EMx6wcvBY/products?apikey=BG0XkgyPUAaoyntDapDNHUuyNqAIdhCr')
	
,function(response){
  var str3 = '';

  response.on('data', function (chunk){
    str3+=chunk;
  });

  response.on('end', function() {
    console.log('customerDetail2');
    customerDetail3=str3;
    customerDetailX3=JSON.parse(str3);
    complete();
  }
);
}).end()

http.request(
  createOptions('/commonapi/v0/es/persons/INGESRIv01-enc-ZLl_OaUMtHhc9Fb5ehNMQvXXdKlAorlzKIbXsyLlI9ZujyWzHEBC-l5JIAx3wjcZkBPWmkx2T_BnaOonul5QMD3P1MJxpfPrY2EMx6wcvBY/products?apikey=BG0XkgyPUAaoyntDapDNHUuyNqAIdhCr')
  ,function (response){
    var str4 = '';

    response.on('data', function (chunk){
      str4+=chunk;
    });

    response.on('end', function(){
      console.log('customerDetail4');
      customerDetail4=str4;
      customerDetailX4=JSON.parse(str4);
      console.log('customerDetail4'+customerDetailX4);
    }
    );
  }).end();

function complete(){
  if(customerDetail1!==null && customerDetail2!==null && customerDetail3!==null && customerDetail4!==null){
    res.render('customerDetail', {
      title: 'Customer Details',
      viewCustomerDetail1:customerDetail1,
      viewCustomerDetail2:customerDetail2,
      viewCustomerDetailX2:customerDetailX2,
      viewCustomerDetail3:customerDetail3,
      viewCustomerDetailX3:customerDetailX3,
      viewCustomerDetail4:customerDetail4,
      viewCustomerDetailX4:customerDetailX4
      });
    };
  }
}

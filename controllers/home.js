/**
 * GET /
 * Home page.
 */
var graph = require('fbgraph');

 var User = require('../models/User');

var facebookProfile = null;
   var response = null;


exports.index = function(req, res) {
       response = res;
  User.findById(req.user.id, function(err, user) {
   //   if (err) return next(err);


   //   user.tokens = _.reject(user.tokens, function(token) { return token.kind === provider; });
        //      console.log(user.tokens);
              var length = user.tokens.length;
              for(var i = 0;i<length;i++){
        //      console.log(user.tokens[i].kind)
                if(user.tokens[i].kind=='facebook'){
            //    console.log(user.tokens[i].access_token);
                                 graph
                                   .setAccessToken(user.tokens[i].accessToken)
                                   .get("/me", function(err, data) {
                                   facebookProfile = data;
                                   complete();
                                   //    console.log(data);
                                   });

                }
              }

    });

};


function complete(){
  if(facebookProfile!==null){
    console.log(facebookProfile);
    response.render('home', {
        title: 'Home',
        fbProfile:facebookProfile

      });
    };
  }

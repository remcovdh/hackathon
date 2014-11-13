/**
 * GET /
 * Home page.
 */
var graph = require('fbgraph');
var Lin = require('node-linkedin');

 var User = require('../models/User');

var facebookProfile = null;
   var response = null;


exports.index = function(req, res) {
       response = res;
  User.findById(req.user.id, function(err, user) {

              var length = user.tokens.length;
              var found = false;
              for(var i = 0;i<length;i++){
                   if(user.tokens[i].kind=='facebook'){
                        found = true;
                        graph
                           .setAccessToken(user.tokens[i].accessToken)
                           .get("/me", function(err, data) {
                                              console.log(err);
                           facebookProfile = data;
                           complete();
                           //    console.log(data);
                           });

                                /*   graph
                                      .setAccessToken(user.tokens[i].accessToken)
                                      .get("/me/photos", function(err, data) {

                                         console.log(data);
                                      }); */

                    }

              }

             if(!found){
              response.render('home', {
                  title: 'Home',
                  fbProfile:{}

                });
              };

    });

};


function complete(){
  if(facebookProfile!==null){
    console.log(facebookProfile);
    console.log(facebookProfile.location);
    console.log(facebookProfile.location.name);
    response.render('home', {
        title: 'Home',
        fbProfile:facebookProfile

      });
    };
  }

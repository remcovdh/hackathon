/**
 * GET /
 * Home page.
 */
var graph = require('fbgraph');
var Lin = require('node-linkedin');

 var User = require('../models/User');

var facebookProfile = null;
var facebookPicture = null;
   var response = null;


exports.index = function(req, res) {
       response = res;
       var found = false;
       if(req.user)       {


          User.findById(req.user.id, function(err, user) {

                      var length = user.tokens.length;

                      for(var i = 0;i<length;i++){
                           if(user.tokens[i].kind=='facebook'){
                                found = true;
                                graph
                                   .setAccessToken(user.tokens[i].accessToken)
                                   .get("/me", function(err, data) {

                                   facebookProfile = data;
                                   complete();
                                   //    console.log(data);
                                   });
                                  graph.get("/me/picture", function(err, data) {

                                  facebookPicture = data;
                                  complete();

                                  });


                                        /*   graph
                                              .setAccessToken(user.tokens[i].accessToken)
                                              .get("/me/photos", function(err, data) {

                                                 console.log(data);
                                              }); */

                            }

                      }


             if(!found){
             console.log( "not found")
              response.render('home', {
                  title: 'Home',
                  fbProfile:{}

                });
              };
              });
           } else {
           console.log( "no user")
                            response.render('home', {
                                title: 'Home',
                                fbProfile:{}

                              });
           }



};


function complete(){
  if(facebookProfile!==null && facebookPicture !==null){
    console.log(facebookProfile);

    console.log(facebookPicture);
    console.log("WRITING")
    response.render('home', {
        title: 'Home',
        fbProfile:facebookProfile ,
         fbPicture:facebookPicture

      });
      facebookProfile = null;
      facebookPicture = null;
    };
  }

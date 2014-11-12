/**
 * GET /
 * A fully new page page.
 */
   var url= require('url');
                       var User = require('../models/User');

exports.index = function(req, res) {

var url_parts = url.parse(req.url, true);

var query = url_parts.query;
var token = query["access_token"];
console.log(token);
                   console.log(req.user._id);
     User.findById(req.user._id, function(err, user) {
           user.tokens.push({ kind: 'ing', accessToken: token });
           user.save(function(err) {
            res.redirect('/');
            // done(err, user);
           });
         });
              ;

};

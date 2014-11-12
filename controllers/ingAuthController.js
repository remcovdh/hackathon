/**
 * GET /
 * A fully new page page.
 */
   var url= require('url');


exports.index = function(req, res) {
console.log(req);
console.log(res);
var url_parts = url.parse(req.url, true);
console.log(req.url);
var query = url_parts.hash;
console.log(query);

              ;

};

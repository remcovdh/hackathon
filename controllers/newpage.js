/**
 * GET /
 * A fully new page page.
 */

exports.index = function(req, res) {
  res.render('newpage', {
    title: 'New Page'
  });
};

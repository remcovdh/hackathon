exports.index = function(req, res) {
  res.render('customerDetail', {
    title: 'Customer Details'
  });
};


function httpGet()
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

/**
 * GET /
 * A fully new page page.
 */


// function testController($scope, $http) {
// 	$scope.testPost = function testPost() {
// 		aUser = {	"userid" : "Victor Louisa",
// 							"password" : "heavy d",
// 							"email" : "victor@e-mail.com" }
//
// 		atestURL = "http://<ip-adres>:8080/admire/api/users";
//
// 		$http.post(atestURL, aUser).
// 		  success(function(data, status, headers, config) {
// 				console.log('Opslaan gelukt');
// 		  }).
// 		  error(function(data, status, headers, config) {
// 				console.log('Opslaan mislukt, statuscode' + status);
// 		  });
// 	}
// }
//
// 

exports.index = function(req, res) {
  res.render('newpage', {
    title: 'New Page'
  });
};

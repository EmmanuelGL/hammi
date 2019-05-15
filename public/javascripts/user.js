

var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope,$http,$window) {
//   $scope.master = 
//   $scope.reset = function() {
//     $scope.user = angular.copy($scope.master);
//   };
//   $scope.reset();
// var user = {}
// $scope.inicioSesion = function(user){
//     $http({
//         method : "post",
//         url : "/auth/signin",
//         data : user
//       }).then(function mySuccess(response) {
//         // $scope.myWelcome = response.data;
//         console.log(JSON.stringify(response.data))
//         $window.location.href = 'http://localhost:3001/products/details'
//       }, function myError(response) {
//           console.log('error-------'+response)
//         $scope.myWelcome = response.statusText;
//       });
// }
function edit(user){
    console.log(user)
}
});
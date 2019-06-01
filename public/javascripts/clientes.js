

(function(app) {
    'use strict';
  app = angular.module('clientes', ['ui.bootstrap','ui.filters']);
  app.controller('datos',function($scope,$http) {
    $scope.vacio = false
    $scope.filteredTodos = [],
    $scope.currentPage = 1,
    $scope.numPerPage = 10,
    $scope.maxSize = 6;
    $http.get('/clientesDatos')
			.then(function onSuccess(response) {
      //  console.log(JSON.stringify(response.data))
       $scope.items = response.data;
       
			}, function onError(response){
        $scope.items = response.data;
				var items = response.data;
				console.log(data);
      })
      .then($scope.makeTodos = function() {
        $scope.items
        // console.log(JSON.stringify($scope.items))
      })
      .then($scope.p= function(){
        
        $scope.makeTodos(); 

        $scope.numPages = function () {
          return Math.ceil($scope.items.length / $scope.numPerPage);
        };
  
        $scope.$watch('currentPage + numPerPage', function() {
          var begin = (($scope.currentPage - 1) * $scope.numPerPage)
          , end = begin + $scope.numPerPage;
          
          $scope.filteredTodos = $scope.items.slice(begin, end);
        });
      })


      // $http.get('/clientesDatos')
      // .then(function onSuccess(response) {
      //       $scope.clientes= response.data;
      //       // console.log(JSON.stringify(response));
      // }, function onError(response) {
      //       var data = response.data;
      //       console.log(data);
      //     })  
  

   
  
  })
  
  })(window.angular);
  
  
  




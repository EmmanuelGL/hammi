// var app = angular.module('consultas', ['ui.bootstrap','angucomplete-alt']);
var app = angular.module('consultas', ['ui.bootstrap','ui.filters']);
app.controller('query', function($scope, $http) {
//año actual
// $scope.fecha  = $filter('date')(new Date(),'dd-MM-yyyy');
//$scope.ano = fecha.getFullYear();
//autocomplete----------------------------------
// $scope.selectedObj = {};
//   $scope.nationalities = [  
//      {
//         "NATIONALITY_ID": 1,
//         "description":"Afghan"
//      },
//      {  
//         "NATIONALITY_ID": 2,
//         "description":"Andorran"
//      },
//      {  
//         "NATIONALITY_ID": 3,
//         "description":"Botswanan"
//      },
//      {  
//         "NATIONALITY_ID": 4,
//         "description":"Brazilian"
//      },
//      {  
//         "NATIONALITY_ID": 5,
//         "description":"Canadian"
//      },
//      {
//         "NATIONALITY_ID": 6,
//         "description":"Cypriot"
//      }
//   ];
//--------------------------------------
//  $scope.todate=new Date();
   $scope.example = {
         value: new Date(),
         currentDate: new Date(1960,01,01),
         max: new Date()
       };

//-------------------------------
$scope.filteredTodos = [],
$scope.currentPage = 1,
$scope.numPerPage = 5,
$scope.maxSize = 5;
//---------------------------------
  $scope.tipo = [
              {value : "alumno", select : "Alunmo"},
              {value : "titulo", select : "Título"},
              {value : "clasificacion", select : "Clasificación"},
              {value : "especialidad", select : "Especialidad"},
              {value : "departamento", select : "Departamento"},
              {value : "grado", select : "Grado"},
              {value : "fechapublicacion", select : "Fecha de Publicación"},
              {value : "director", select : "Director"},
              {value : "codirectores", select : "Codirectores"}
              ];
  $scope.actas = function(){
    var pathname = window.location.pathname;
    $http.get('/actas')
			.then(function onSuccess(response) {
      //  console.log(JSON.stringify(response.data))
       $scope.items = response.data;
			}, function onError(response){
				var data = response.data;
				console.log(data);
			})
  }
  $scope.tesis = function(){
    $scope.items= []
    $http.get('/tesis')
			.then(function onSuccess(response) {
      //  console.log(JSON.stringify(response.data))
       $scope.items = response.data;
       
			}, function onError(response){
				var data = response.data;
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
     
      // .then($scope.configPages = function () {
      //   console.log($scope.items.length)
      //   var items = $(".thumbnail");
      //   var numItems = $scope.items.length;
      //   var perPage = 5;

      //   items.slice(perPage).hide();

      //   $('#pagination-container').pagination({
      //       items: numItems,
      //       itemsOnPage: perPage,
      //       prevText: "&laquo;",
      //       nextText: "&raquo;",
      //       cssStyle: 'dark-theme',
      //       onPageClick: function (pageNumber) {
      //           var showFrom = perPage * (pageNumber - 1);
      //           var showTo = showFrom + perPage;
      //           items.hide().slice(showFrom, showTo).show();
      //       }
      //   });
      // })
  }
  $scope.ordertesis = function(){
    $scope.ordenado={
      order : $scope.ordenar
    }
    // console.log(JSON.stringify($scope.ordenado))
    var pathname = window.location.pathname;
    $http.post(pathname, $scope.ordenado)
			.then(function onSuccess(response) {
      //  console.log(JSON.stringify(response.data))
       $scope.items = response.data;
      //  console.log(JSON.stringify($scope.items))
			}, function onError(response){
				var data = response.data;
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
  }
  $scope.busquedaT = function(){
    $scope.ordenado={
      order : $scope.ordenar
    }
    // console.log(JSON.stringify($scope.ordenado))
    var pathname = window.location.pathname;
    $http.post(pathname, $scope.ordenado)
			.then(function onSuccess(response) {
      //  console.log(JSON.stringify(response.data))
       $scope.items = response.data;
      //  console.log(JSON.stringify($scope.items))
			}, function onError(response){
				var data = response.data;
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
  }
  $scope.limpiar = function(){
   
    $scope.form.$setPristine();
    $scope.form.$setUntouched();   
    $scope.busqueda = {};
  }
});



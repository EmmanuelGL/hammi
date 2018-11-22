// var app = angular.module('consultas', ['ui.bootstrap','ui.filters','angucomplete-alt']);
var app = angular.module('consultas', ['ui.bootstrap','ui.filters']);
app.controller('query', function($scope, $http) {
  $scope.busqueda ={};
  
  
  
$scope.vacio = false
$scope.filteredTodos = [],
$scope.currentPage = 1,
$scope.numPerPage = 5,
$scope.maxSize = 5;
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
  $scope.tipo1 = [
                {value : "alumno", select : "Alunmo"},
                {value : "titulo", select : "Título"},
                {value : "folio", select : "Folio"},
                {value : "lugar", select : "Lugar"},
                {value : "fecha", select : "Fecha de Toma de Grado"},
                {value : "director", select : "Director"},
                {value : "codirector", select : "Codirectores"},
                {value : "sinodales", select : "Sinodales"},
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
  $scope.orderactas = function(){
    $scope.ordenado={
      order : $scope.ordenar
    }
    // console.log(JSON.stringify($scope.ordenado))
    var pathname = window.location.pathname;
    $http.post(pathname, $scope.ordenado)
			.then(function onSuccess(response) {
       console.log(JSON.stringify(response.data))
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
  $scope.busquedaA = function(){
    $scope.modal={
      modal: "buscar",
      folio : $scope.busqueda.folio || null,
      lugar: $scope.busqueda.lugar || null,
      desde: $scope.example.currentDate1,
      hasta: $scope.currentDate2,
      alumno: $scope.busqueda.alumno|| null,
      titulo: $scope.busqueda.titulo || null,
      director: $scope.busqueda.director || null,
      codirector: $scope.busqueda.codirector || null,
      sinodal: $scope.busqueda.sinodal || null
    }
    console.log(JSON.stringify($scope.modal))
    var pathname = window.location.pathname;
    $http.post(pathname, $scope.modal)
			.then(function onSuccess(response) {
      //  console.log(JSON.stringify(response.data))
       $scope.items = response.data;
       console.log(JSON.stringify($scope.items.length))
        if($scope.items.length == 0)
          $scope.vacio = true
        else $scope.vacio = false
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
    $scope.limpiar();
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
    $scope.modal={
      modal: "buscar",
      departamento : $scope.busqueda.departamento || null,
      grado: $scope.busqueda.grado || null,
      especialidad: $scope.busqueda.especialidad || null,
      desde: $scope.example.currentDate1,
      hasta: $scope.currentDate2,
      alumno: $scope.busqueda.alumno || null,
      titulo: $scope.busqueda.titulo || null,
      director: $scope.busqueda.director || null,
      codirector: $scope.busqueda.codirector || null
    }
    // console.log(JSON.stringify($scope.modal))
    var pathname = window.location.pathname;
    $http.post(pathname, $scope.modal)
			.then(function onSuccess(response) {
      //  console.log(JSON.stringify(response.data))
       $scope.items = response.data;
       console.log(JSON.stringify($scope.items.length))
        if($scope.items.length == 0)
          $scope.vacio = true
        else $scope.vacio = false
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
    $scope.limpiar();
  }
  $scope.limpiar = function(){
   
    // $scope.form.$setPristine();
    // $scope.form.$setUntouched();
    $scope.fecha();  
    $scope.busqueda = {};
  }
  $scope.fecha = function(){
    $scope.example = {
      // currentDate2: new Date(),
      currentDate: new Date(1960,00,01),
      currentDate1: new Date(1960,00,01),
      max: new Date()
    };
    var dt = new Date();
    var month = dt.getMonth();
    var day = dt.getDate()+1;
    var day1 = dt.getDate();
    var year = dt.getFullYear();
    $scope.limite=new Date(year,month,day)
    $scope.currentDate2=new Date(year,month,day1)
  }
});



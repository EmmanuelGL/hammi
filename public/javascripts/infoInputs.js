
.0//'use strict';

var app = angular.module('prueba', []);
app.controller('TablaCtrl', ['$scope', function($scope) {
  $("#JSON").text(JSON.stringify($scope.rows));
  // $scope.lista = [];
  
  // $scope.eliminar = function(row) {
  //   console.log(row);
  //   if (confirm("¿Seguro que desea eliminar?")) {
  //     console.log(row);
  //     $scope.lista.splice(row, 1);
  //   }
  //   if($scope.lista.length < 5)
  //     $('#agrega').attr('disabled','');
  // };

    // $scope.agregar = function() {
    //   //console.log($scope.lista.length);
    // if($scope.lista.length < 5){
    //     $scope.lista.push({
    //       nombre: '',
    //       nombre2: '',
    //       apellido: '',
    //       apellido2: '',
    //       institucion: '',
    //       cargo:''
    //     })
    //   }else{
    //     $('#agrega').attr('disabled','disabled');
    //   }
    // };

  // $scope.recuperarValores = function() {
  //   console.log($scope.lista);
  //   $("#JSON").text(JSON.stringify($scope.lista));
  // };


///////////////////////////////////
// function sinodales($scope){
   $scope.rows = [];
  //  $scope.rows = [{
  //   addName:"p",
  //   addName1:"p",
  //   addName2:"p",
  //   addApsinodal:"l",
  //   addApsinodal1:"l",
  //   addApsinodal2:"l"
  // }];    
 // $scope.rows = ['Paul','John','Lucie'];
  $scope.temp = false;
  
  $scope.addRow = function(){
    $scope.temp = false;
    $scope.addName="";
    $scope.addName1="";
    $scope.addName2="";
    $scope.addApsinodal="";
    $scope.addApsinodal1="";
    $scope.addApsinodal2="";
    $scope.institucionsino="";
    $scope.cargosino="";
  };
  
  $scope.deleteRow = function(row){
    $scope.rows.splice($scope.rows.indexOf(row),1);
   
    // $scope.usuarios.splice($scope.usuarios.indexOf(row),1);
  };
  
  $scope.addTemp = function(){
    if($scope.temp){
      $scope.rows.pop();
    }  
    
    else if($scope.addName) $scope.temp = true;
    if($scope.rows.length<=4){
      if($scope.addName) {
        $scope.user = {
          addName: $scope.addName,
          addName1: $scope.addName1,
          addName2: $scope.addName2,
          addApsinodal: $scope.addApsinodal,
          addApsinodal1: $scope.addApsinodal1,
          addApsinodal2: $scope.addApsinodal2,
          institucionsino: $scope.institucionsino,
          cargosino: $scope.cargosino,
        }
        $scope.rows.push($scope.user);
      }
    }
    else $scope.temp = false;
  };
  
 
// }
////////////////////////////////////////////////////




}]);

// app.directive('editableTd', [function() {
//   return {
//     restrict: 'A',
//     link: function(scope, element, attrs) {
//       element.css("cursor", "pointer");
//       element.attr('contenteditable', 'true');

//       element.bind('blur keyup change', function() {
//         scope.lista[attrs.row][attrs.field] = element.text();
//       });

//       element.bind('click', function() {
//         document.execCommand('selectAll', false, null)
//       });
//     }
//   };
// }]);


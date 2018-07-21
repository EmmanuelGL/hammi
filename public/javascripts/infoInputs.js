//'use strict';

var app = angular.module('prueba', []);
app.controller('TablaCtrl', ['$scope', function($scope) {
  $scope.lista = [];
  
  $scope.eliminar = function(row) {
    if (confirm("¿Seguro que desea eliminar?")) {
      $scope.lista.splice(row, 1);
    }
    if($scope.lista.length < 5){
      $('#agrega').attr('disabled','');
    }
  };

    $scope.agregar = function() {
      console.log($scope.lista.length);
    if($scope.lista.length < 5){
        $scope.lista.push({
          nombre: '',
          nombre2: '',
          apellido: '',
          apellido2: '',
          institucion: '',
          cargo:''
        })
      }else{
        $('#agrega').attr('disabled','disabled');
      }
    };

  $scope.recuperarValores = function() {
    console.log($scope.lista);
    $("#JSON").text(JSON.stringify($scope.lista));
  };
}]);

app.directive('editableTd', [function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.css("cursor", "pointer");
      element.attr('contenteditable', 'true');

      element.bind('blur keyup change', function() {
        scope.lista[attrs.row][attrs.field] = element.text();
      });

      element.bind('click', function() {
        document.execCommand('selectAll', false, null)
      });
    }
  };
}]);
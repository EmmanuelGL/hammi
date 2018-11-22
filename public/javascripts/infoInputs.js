
(function(app) {
  'use strict';
app = angular.module('registro', []);
app.controller('data',function($scope,$http) {
$scope.meses = [{nombre: 'Enero',numero: 1}, {nombre: 'Febrero',numero: 2}, {nombre: 'Marzo',numero: 3},{nombre: 'Abril',numero: 4},
                  {nombre: 'Mayo',numero: 5 }, {nombre: 'Junio', numero: 6 }, {nombre: 'Julio',numero: 7},{nombre: 'Agosto',numero: 8},
                  {nombre: 'Septiembre',numero: 9},{nombre: 'Octubre',numero: 10}, {nombre: 'Noviembre',numero: 11 },
                  {nombre: 'Diciembre',numero: 12 }];
$scope.n = (new Date()).getFullYear()
$scope.user={};  
$scope.master = {};
$scope.consulta = function(){  
    $http.get('/consulta')
    .then(function onSuccess(response) {
      $scope.items = response.data[0].items;
      $scope.items2 = response.data[0].items2;
      $scope.items3 = response.data[0].items3;
      // console.log(JSON.stringify($scope.items2));
    }, function onError(response) {
      var data = response.data;
      console.log(data);
    })  
}
 $scope.update = function(user) {
   $scope.master = angular.copy(user);
 };

 $scope.reset = function() {
        $scope.form.$setPristine();
        $scope.user = {};
        $scope.form.$setUntouched();
    };

$scope.rows = [];

$scope.temp = false;
 
 $scope.addRow = function(){
   $scope.temp = false;
   $scope.addName=null;
   $scope.addName1=null;
   $scope.addName2=null;
   $scope.addApsinodal=null;
   $scope.addApsinodal1=null;
   $scope.addApsinodal2=null;
   $scope.institucionsino=null;
   $scope.cargosino=null;
 };
 $scope.deleteRow = function(row){
   $scope.rows.splice($scope.rows.indexOf(row),1);
 };
 
 $scope.addTemp = function(){
   if($scope.temp){
     $scope.rows.pop();
   }  
   else if($scope.addName && $scope.addApsinodal) $scope.temp = true;
   if($scope.rows.length<=4){
     if($scope.addName && $scope.addApsinodal) {
       $scope.user1 = {
         addName: $scope.addName || null,
         addName1: $scope.addName1 || null,
         addName2: $scope.addName2 || null,
         addApsinodal: $scope.addApsinodal || null,
         addApsinodal1: $scope.addApsinodal1 || null,
         addApsinodal2: $scope.addApsinodal2 || null,
         institucionsino: $scope.institucionsino || null,
         cargosino: $scope.cargosino || null,
       }
       $scope.rows.push($scope.user1);
       
     }
     else $scope.temp = false;
   }
 };

 

//--------------insetar los datos------------------------
 $scope.insertar = function(user){
   $scope.insert= {
      matricula:$scope.user.matricula || null,
      nombre:$scope.user.nombre || null,
      nombre2:$scope.user.nombre2 || null,
      nombre3:$scope.user.nombre3 || null,
      apellido:$scope.user.apellido || null,
      apellido2:$scope.user.apellido2 || null,
      apellido3:$scope.user.apellido3 || null,
      tituloT:$scope.user.tituloT || null,
      mes:$scope.user.mes || null,
      ano:$scope.user.ano || null,
      folio:$scope.user.folio || null,
      lugar:$scope.user.lugar || null,
      grado:$scope.user.grado || null,
      director:$scope.user.director || null,
      codirector:$scope.user.codirector || null,
      codirector1:$scope.user.codirector1 || null,
      codirector2:$scope.user.codirector2 || null,
      codirector3:$scope.user.codirector3 || null,
      sinodal:$scope.user.sinodal || null,
      sinodal2:$scope.user.sinodal2 || null,
      sinodal3:$scope.user.sinodal3 || null,
      sinodal4:$scope.user.sinodal4 || null,
      sinodal5:$scope.user.sinodal5 || null,
      sinodalinv:$scope.rows 
    }
  //   $scope.alldate.push($scope.insert);
   
    $("#JSON").text(JSON.stringify($scope.insert));
    
      swal({
        title: "Desea Guardar los Datos?",
        text: "Solo se ingresan los datos capturados!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#fff',
        confirmButtonText: 'Si, Guardar!',
        cancelButtonText: "No, cancelar!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm){
        if (isConfirm){
          //----------------------insercion de los datos -------------------
          // $("#JSON").text(JSON.stringify($scope.insert));
          var pathname = window.location.pathname;
          console.log(pathname)
          $http.post(pathname, $scope.insert)
          .then(function onSuccess(response) {
            console.log(JSON.stringify(response.data));
            swal("Insertados!", "Sus datos fueron ingresados correctamente!", "success");
            // $scope.tiempo = response.status;
          }, function onError(response) {
            var data = response.data;
            swal("Disculpe", "Existió un problema", "error");
            console.log(data);
          })
        } else {
          swal("Cancelado", "No se guardaron los cambios", "error");
        }
      });

}

});


})(window.angular);


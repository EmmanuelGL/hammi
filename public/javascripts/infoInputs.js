var app = angular.module('prueba', []);
app.controller('TablaCtrl', ['$scope', function($scope) {
  $scope.alldate = [];
  $scope.rows = [];
  $scope.matricula="";
  $scope.nombre="";
  $scope.nombre2="";
  $scope.nombre3="";
  $scope.apellido="";
  $scope.apellido2="";
  $scope.apellido3="";
  $scope.tituloT="";
  $scope.mes="";
  $scope.ano="";
  $scope.folio="";
  $scope.lugar="";
  $scope.grado="";
  $scope.director="";
  $scope.codirector="";
  $scope.codirector1="";
  $scope.codirector2="";
  $scope.codirector3="";
  $scope.sinodal="";
  $scope.sinodal2="";
  $scope.sinodal3="";
  $scope.sinodal4="";
  $scope.sinodal5="";
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


 ////////////////////////////prueba/////////////
 $scope.insertar = function(){
   $scope.insert= {
      matricula:$scope.matricula,
      nombre:$scope.nombre,
      nombre2:$scope.nombre2,
      nombre3:$scope.nombre3,
      apellido:$scope.apellido,
      apellido2:$scope.apellido2,
      apellido3:$scope.apellido3,
      tituloT:$scope.tituloT,
      mes:$scope.mes,
      ano:$scope.ano,
      folio:$scope.folio,
      lugar:$scope.lugar,
      grado:$scope.grado,
      director:$scope.director,
      codirector:$scope.codirector,
      codirector1:$scope.codirector1,
      codirector2:$scope.codirector2,
      codirector3:$scope.codirector3,
      sinodal:$scope.sinodal,
      sinodal2:$scope.sinodal2,
      sinodal3:$scope.sinodal3,
      sinodal4:$scope.sinodal4,
      sinodal5:$scope.sinodal5,
      sinidalinv:$scope.rows 
    }
    $scope.alldate.push($scope.insert);
      // if (confirm("¿Seguro que desea Guardar los datos?")) {
      //   $("#JSON").text(JSON.stringify($scope.insert));
      // }
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
          $("#JSON").text(JSON.stringify($scope.insert));
          $.ajax({
            url: "/insert",
            method: 'POST',
            data:  $scope.insert,
            success: function(response) {
            console.log(response);
            alert('si se mando todo bien');
            },
            error: function (err) {
              console.log(err);
              alert('Disculpe, existió un problema');
            }
          });
          ///-----------final de insercion---------------------

          swal("Insertados!", "Sus datos fueron ingresados correctamente!", "success");
        } else {
          swal("Cancelado", "No se guardaron los cambios", "error");
        }
      });
 }

}]);



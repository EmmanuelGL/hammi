function ComboAno(){
  var n = (new Date()).getFullYear()
  var anio = document.getElementById("anio")
  anio.max = n
};
window.onload = ComboAno;
(function(app) {
  'use strict';
app = angular.module('registro', []);
app.controller('data', ['$scope', function($scope) {
$scope.user={};  
$scope.master = {};

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
   else if($scope.addName && $scope.addApsinodal) $scope.temp = true;
   if($scope.rows.length<=4){
     if($scope.addName && $scope.addApsinodal) {
       $scope.user1 = {
         addName: $scope.addName || "",
         addName1: $scope.addName1 || "",
         addName2: $scope.addName2 || "",
         addApsinodal: $scope.addApsinodal || "",
         addApsinodal1: $scope.addApsinodal1 || "",
         addApsinodal2: $scope.addApsinodal2 || "",
         institucionsino: $scope.institucionsino || "",
         cargosino: $scope.cargosino || "",
       }
       $scope.rows.push($scope.user1);
       
     }
     else $scope.temp = false;
   }
 };

 

//--------------insetar los datos------------------------
 $scope.insertar = function(user){
   $scope.insert= {
      matricula:$scope.user.matricula || "",
      nombre:$scope.user.nombre || "",
      nombre2:$scope.user.nombre2 || "",
      nombre3:$scope.user.nombre3 || "",
      apellido:$scope.user.apellido || "",
      apellido2:$scope.user.apellido2 || "",
      apellido3:$scope.user.apellido3 || "",
      tituloT:$scope.user.tituloT || "",
      mes:$scope.user.mes || "",
      ano:$scope.user.ano || "",
      folio:$scope.user.folio || "",
      lugar:$scope.user.lugar || "",
      grado:$scope.user.grado || "",
      director:$scope.user.director || "",
      codirector:$scope.user.codirector || "",
      codirector1:$scope.user.codirector1 || "",
      codirector2:$scope.user.codirector2 || "",
      codirector3:$scope.user.codirector3 || "",
      sinodal:$scope.user.sinodal || "",
      sinodal2:$scope.user.sinodal2 || "",
      sinodal3:$scope.user.sinodal3 || "",
      sinodal4:$scope.user.sinodal4 || "",
      sinodal5:$scope.user.sinodal5 || "",
      sinodalinv:$scope.rows 
    }
  //   $scope.alldate.push($scope.insert);
   
    $("#JSON").text(JSON.stringify($scope.insert));
    
      swal({
        title: "Desea Guardar los Datos?",
        text: "Solo se ingresan los datos capturados!" 
        // "\n Matricula: "+ $scope.insert.matricula+
        // "\n Nombre: "+ $scope.insert.nombre+
        // "\n Nombre2: "+$scope.insert.nombre2+
        // "\n Nombre3: "+$scope.insert.nombre3+
        // "\n Apellido: "+$scope.insert.apellido+
        // "\n Apellido2: "+$scope.insert.apellido2+
        // "\n Apellido3: "+$scope.insert.apellido3 +
        // "\n Titulo: "+$scope.insert.tituloT +
        // "\n Mes: "+$scope.insert.mes +
        // "\n Año: "+$scope.insert.ano +
        // "\n Folio: "+$scope.insert.folio +
        // "\n Lugar: "+$scope.insert.lugar +
        // "\n Grado: "+$scope.insert.grado +
        // "\n Director: "+$scope.insert.director +
        // "\n Codirector: "+$scope.insert.codirector +
        // "\n Codirector2: "+$scope.insert.codirector1 +
        // "\n Codirector3: "+$scope.insert.codirector2 +
        // "\n Codirector4: "+$scope.insert.codirector3 +
        // "\n Sinodal: "+$scope.insert.sinodal +
        // "\n Sinodal2: "+$scope.insert.sinodal2 +
        // "\n Sinodal3: "+$scope.insert.sinodal3 +
        // "\n Sinodal4: "+$scope.insert.sinodal4 +
        // "\n Sinodal5: "+$scope.insert.sinodal5 +
        // "\n Sinodales invitados: "+$scope.rows
       ,
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
//           var pathname = window.location.pathname;
//           console.log(pathname)
//           // $http.post(pathname, $scope.insert)
//           // .success((data) => {
//           //   console.log(data);
//           // })
//           // .error((error) => {
//           //   console.log('Error: ' + error);
//           // });
        
//           $.ajax({
//             url: pathname,
//             method: 'POST',
//             data:  $scope.insert,
//             success: function(response) {
//             console.log(response);
//             //alert('si se mando todo bien');
            swal("Insertados!", "Sus datos fueron ingresados correctamente!", "success");
//             },
//             error: function (err) {
//               console.log(err);
//               swal("Disculpe", "Existió un problema", "error");
//               //alert('Disculpe, existió un problema');
//             }
//           });
//           ///-----------final de insercion---------------------

        } else {
          swal("Cancelado", "No se guardaron los cambios", "error");
        }
      });

}

}]);


})(window.angular);


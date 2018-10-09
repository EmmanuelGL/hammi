

// // var app = angular.module('muestra', []);
// // app.controller('tabla', function($scope, $http,$timeout) {
// // 	console.log("si llega al controller")
// // 	$scope.tipo = [
// //         {value : "v_departamentoa", select : "Departamento"},
// //         // {value : "v_especialidada", select : "Especialidad"},
// // 		{value : "v_gradoa", select : "Grado"},
// // 		{value : "v_generoa", select : "Género"},
// // 		{value : "v_deptogradoa", select : "Departamento y Grados"},
// // 		// {value : "v_especialidaddeptoa", select : "Especialidad y Departamentos"},
// // 	];
// // 	$scope.currentPage = 0;
// //     $scope.pageSize = 10;
// // 	$scope.pages = [];
// // 	$scope.paginas = [10, 50, 100, 150, 1000];

// // 	$scope.selecttable = function(){
// // 		if($scope.selectActas !==undefined){
// // 			console.log($scope.selectActas);
// // 			$scope.grafica={
// // 				tabla : $scope.selectActas
// // 			}
// // 			var pathname = window.location.pathname;
// // 			$http.post(pathname, $scope.grafica)
// // 			.then(function onSuccess(response) {
// // 				$scope.personas = response.data[0].nombres;
// // 				$scope.titulos = response.data[0].items;
// // 			}, function onError(response) {
// // 				var data = response.data;
// // 				console.log(data);
// // 			})
// // 			.then(
// // 				$scope.configPages = function () {
// // 					$scope.pages.length = 0;
// // 					console.log("--->---------------"+$scope.personas.length)
					
// // 					var ini = $scope.currentPage - 4;
// // 					var fin = $scope.currentPage + 5;
// // 					if (ini < 1) {
// // 						ini = 1;
// // 						if (Math.ceil($scope.personas.length / $scope.pageSize) > 10)
// // 							fin = $scope.personas.length / $scope.pageSize + 1;
// // 						else
// // 							fin = Math.ceil($scope.personas.length / $scope.pageSize);
// // 					} else {
// // 						if (ini >= Math.ceil($scope.personas.length / $scope.pageSize) - 10) {
// // 							ini = Math.ceil($scope.personas.length / $scope.pageSize) - 10;
// // 							fin = Math.ceil($scope.personas.length / $scope.pageSize);
// // 						}
// // 					}
// // 					if (ini < 1) ini = 1;
// // 					for (var i = ini; i <= fin; i++) {	
// // 						$scope.pages.push({
// // 							no: i
// // 						});
// // 					}
// // 					if ($scope.currentPage >= $scope.pages.length)
// // 					$scope.currentPage = $scope.pages.length - 1;
				
// // 				})
			
// // 			$scope.setPage = function (index) {
// //                 $scope.currentPage = index - 1;
// //             };


// // 		}
// // 	}

// //     $scope.informa = function () {
// //         $scope.pageSize = $scope.pageSize;

// //     }
// // })
// // app.filter('startFromGrid', function () {
// //     return function (input, start) {
// //         if (!input || !input.length) { return; }
// //         start = +start;
// // 		return input.slice(start);
		
		 
// //     }
// // });









// var app = angular.module('muestra', []);
// app.controller('tabla', function($scope, $http,$timeout) {
// 	console.log("si llega al controller")
// 	$scope.tipo = [
//         {value : "v_departamentoa", select : "Departamento"},
//         // {value : "v_especialidada", select : "Especialidad"},
// 		{value : "v_gradoa", select : "Grado"},
// 		{value : "v_generoa", select : "Género"},
// 		{value : "v_deptogradoa", select : "Departamento y Grados"},

// 		// {value : "v_especialidaddeptoa", select : "Especialidad y Departamentos"},
// 	];
// 	// var table = $('#local').DataTable();
// 	// $scope.selectActas = $scope.tipo[0];
// 	// console.log($scope.tipo[0])
	
// 	$scope.selecttable = function(){
// 		$scope.personas = null;
// 		$scope.titulos = null;
// 		if($scope.selectActas !==undefined){
// 			if ( $.fn.dataTable.isDataTable( '#local' ) ) {
// 				// table.destroy();
// 				$('#local').empty();
// 			}
// 			console.log($scope.selectActas);
// 			$scope.grafica={
// 				tabla : $scope.selectActas
// 			}
// 			var pathname = window.location.pathname;
// 			$http.post(pathname, $scope.grafica)
// 			.then(function onSuccess(response) {
// 				// var status = response.status;
// 				// var statusText = response.statusText;
// 				// var headers = response.headers;
// 				// var config = response.config;
// 				// console.log("status: "+status+" statusText: "+statusText+" headers: "+headers+" config: "+JSON.stringify(config))
// 				$scope.titulos = response.data[0].titulos;
// 				$scope.personas = response.data[0].items;
// 				console.log($scope.titulos)
// 				console.log("-------------------------")
// 				console.log($scope.personas)
// 				let thead = $('.head'), tbody = $('tbody');
// 				thead.html('');
// 				// tbody.html('');
// 				$scope.titulos.forEach(titulo => {
// 					thead.append(`
// 						<th class="text-center">${titulo.column_name}</th>
// 					`)
// 				})
// 				//console.log('tamaño: '+$scope.personas.length)

// 				// for(var i=0; i < $scope.personas.length; i++){
// 				// 	// tbody.append(`<tr>`)	
// 				// 	var s= $scope.personas[i];
// 				// 	console.log("numero: "+ JSON.stringify(s) )
// 				// 	// console.log('tamaño: '+$scope.personas.length+' impresion: '+i+' dato: '+JSON.stringify($scope.personas[i]))
// 				// 	for(var z=0; z < $scope.personas[i].length; z++ ){
// 				// 		console.log("numero: "+$scope.personas[i].length )
// 				// 		tbody.append(`<td class="text-center">${JSON.stringify($scope.personas[i])}</td>`)	
// 				// 	}
// 				// 	// tbody.append(`</tr>`)	
// 				// }
// 				// for(datos in $scope.personas){
// 				// 	console.log(" key: "+ datos + "  prueba: " + JSON.stringify($scope.personas[datos].total) )
// 				// 	console.log(" key: "+ datos + "  prueba: " + JSON.stringify($scope.personas[datos].departamento) )
// 				// 	tbody.append(`
// 				// 			<tr>
							
// 				// 			<td class="text-center">${$scope.personas[datos].total}</td>
							
// 				// 			<tr>
// 				// 		`)	
// 					// for(key in datos){
// 					// 	console.log(" key: "+ key + "  prueba: " + JSON.stringify($scope.personas[key].total) )
// 					// 	console.log(" key: "+ key + "  prueba: " + JSON.stringify($scope.personas[key].departamento) )

// 					// }

// 				//}
                                   
				
// 				// $scope.personas.forEach(datos => {
// 				// 	datos.forEach(x => {
// 				// 		thead.append(`
// 				// 			<tr>
// 				// 			<td class="text-center">${x}</td>
// 				// 			<tr>
// 				// 		`)	
// 				// 	})
// 				// })












// 			}, function onError(response) {
// 				var data = response.data;
// 				console.log(data);
// 			})
// 			// .then(
// 			// 	$scope.configPages = function () {
// 			// 		$(document).ready(function() {
// 			// 			if ( $.fn.dataTable.isDataTable( '#example' ) ) {
// 			// 				table = $('#example').DataTable();
// 			// 			}
// 			// 			else {
// 			// 				var table = $('#local').DataTable( {
// 			// 					"processing": true,
       							
// 			// 					retrieve: true,
// 			// 					fixedHeader: {
// 			// 						header: true,
// 			// 						footer: true
// 			// 					}
// 			// 				});
// 			// 			}
// 			// 		});	
// 			// 	})
// 			$timeout( function(){ 
// 						$(document).ready(function() {
							
							
// 							// else {
								
// 								table = $('#local').DataTable( {
// 									"processing": true,
									   
// 									retrieve: true,
// 									fixedHeader: {
// 										header: true,
// 										footer: true
// 									}
// 								});

// 							// }
// 						});	
// 					 }, 900);
// 		}
// 	}

    
// })





$(document).ready(function() {
	if (document.getElementsByTagName("td").length>0) {	
		$('#local').DataTable( {
				//dom: 'Bfrtip',
				
				/*"oTableTools": {
						"sSwfPath": "js/plugins/dataTables/swf/copy_csv_xls_pdf.swf"
					},*/
					"language":{
						"sProcessing":     "Procesando...",
						"sLengthMenu":     "Mostrar _MENU_ registros",
						"sZeroRecords":    "No se encontraron resultados",
						"sEmptyTable":     "Ningún dato disponible en esta tabla",
						"sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
						"sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
						"sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
						"sInfoPostFix":    "",
						"sSearch":         "Buscar:",
						"sUrl":            "",
						"sInfoThousands":  ",",
						"sLoadingRecords": "Cargando...",
						"oPaginate": {
							"sFirst":    "Primero",
							"sLast":     "Último",
							"sNext":     "Siguiente",
							"sPrevious": "Anterior"
						},
						"oAria": {
							"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
							"sSortDescending": ": Activar para ordenar la columna de manera descendente"
						}
					},
		});
	}
});

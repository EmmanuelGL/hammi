
var app = angular.module('estadisticas', ['ui.filters']);
app.controller('graficas', function($scope, $http,$timeout) {
	$scope.tipo = [
        {value : "v_departamentoa", select : "Departamento"},
        {value : "v_especialidada", select : "Especialidad"},
		{value : "v_gradoa", select : "Grado"},
		{value : "v_generoa", select : "Género"},
		{value : "v_deptogradoa_final", select : "Departamento y Grados"},
		// {value : "v_especialidaddeptoa", select : "Especialidad y Departamentos"},
	];
	$scope.tipo1 = [
        {value : "v_departamentot", select : "Departamento"},
        {value : "v_especialidadt", select : "Especialidad"},
		{value : "v_gradot", select : "Grado"},
		{value : "v_generot", select : "Género"},
		{value : "v_deptogradot_final", select : "Departamento y Grados"},
		// {value : "v_especialidaddeptot", select : "Especialidad y Departamentos"},
	];
	$scope.limit = (new Date()).getFullYear()
	$scope.selectgraficas = function(){
		$scope.subtitle='';
			$scope.grafica={
				grafica : $scope.selectActas
			}
			var tiempo=[]
			var pathname = window.location.pathname;
			$http.post(pathname, $scope.grafica)
			.then(function onSuccess(response) {
				$scope.grafica1 = response.data[0].grafica;
				$scope.title = response.data[0].title[0];
				$scope.encabezados = response.data[0].encabezados;
			}, function onError(response) {
				var data = response.data;
				console.log(data);
			})
			$timeout(function callAtTimeout() {
				if($scope.selectActas !== "v_deptogradoa_final" && $scope.selectActas!== "v_especialidaddeptoa"){
					graficabarra();
					graficapastel();
				}
				if($scope.selectActas == "v_deptogradoa_final" || $scope.selectActas== "v_especialidaddeptoa"){
					graficabarra2();
				}
			 }, 500);
		
	}
	$scope.selectgraficas1 = function(){
		
		$scope.grafica={
			grafica : $scope.selectTesis
		}
		$scope.subtitle= '';
		var pathname = window.location.pathname;
		$http.post(pathname, $scope.grafica)
		.then(function onSuccess(response) {
			$scope.grafica1 = response.data[0].grafica;
			$scope.title = response.data[0].title[0]
			$scope.encabezados = response.data[0].encabezados;
			// $scope.tiempo = response.status;
		}, function onError(response) {
			var data = response.data;
			console.log(data);
		})
		$timeout(function callAtTimeout() {
			if($scope.selectTesis !== "v_deptogradot_final" && $scope.selectTesis!== "v_deptogradot_final"){
				graficabarra();
				graficapastel();
			}
			if($scope.selectTesis == "v_deptogradot_final" || $scope.selectTesis== "v_deptogradot_final"){
				
				graficabarra2();
			}
		 }, 500);
	
	}
	$scope.selectgraficasanio = function(x){
		// console.log(x+'  prueba ----------'+$scope.anio)
		$scope.grafica={
			grafica : x,
			anio : $scope.anio
		}
		$http.post('/periodo', $scope.grafica)
		.then(function onSuccess(response) {
			// console.log(JSON.stringify(response.data));
			$scope.grafica1 = response.data[0].grafica;
			$scope.title = response.data[0].title[0];
			$scope.encabezados = response.data[0].encabezados;
			$scope.subtitle = response.data[0].subtitle;
			// $scope.tiempo = response.status;
		}, function onError(response) {
			var data = response.data;
			console.log(data);
		})
		$timeout(function callAtTimeout() {
			if($scope.title !== "Departamento y Grados" && $scope.title!== "Especialidad y Departamentos"){
				graficabarra();
				graficapastel();
			}
			
			if($scope.title == "Departamento y Grados" || $scope.title== "Especialidad y Departamentos"){
				
				graficabarra2();
			}
		 }, 500);

	}
	$scope.selectgraficasaniot = function(x){
		// console.log(x+'  prueba ----------'+$scope.anio)
		$scope.grafica={
			grafica : x,
			anio : $scope.anio
		}
		$http.post('/periodoT', $scope.grafica)
		.then(function onSuccess(response) {
			// console.log(JSON.stringify(response.data));
			$scope.grafica1 = response.data[0].grafica;
			$scope.title = response.data[0].title[0];
			$scope.encabezados = response.data[0].encabezados;
			$scope.subtitle = response.data[0].subtitle;
			// $scope.tiempo = response.status;
		}, function onError(response) {
			var data = response.data;
			console.log(data);
		})
		$timeout(function callAtTimeout() {
			if($scope.title !== "Departamento y Grados" && $scope.title!== "Especialidad y Departamentos"){
				graficabarra();
				graficapastel();
			}
			
			if($scope.title == "Departamento y Grados" || $scope.title== "Especialidad y Departamentos"){
				
				graficabarra2();
			}
		 }, 500);

	}
	function graficabarra(){
		Highcharts.chart('graficaA', {
			data: {
				table: 'datatable'
			},
			
			chart: {
				type: 'column',
				zoomType: 'x',
			},
			title: {
				text: $scope.title
			},
			subtitle: {
				text: $scope.subtitle
			},
			xAxis: {
				type: 'category',
				title: {
					text: $scope.title
				}
			},
			yAxis: {
				// allowDecimals: false,
				title: {
					text: 'Total'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
				pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f} </b><br/>'
			},
			legend: {
				//enabled: true
				shadow: true
			},
			plotOptions: {
					series: {
						borderWidth: 0,
						dataLabels: {
							enabled: true,
							format: '{point.y:.0f}'
						}
					}
				},
				//series:this.title
				/*series: [{
				   data :this.title
				   }]*/

				//series: 
		});
	}
	function graficapastel(){
		$(document).ready(function(){
				Highcharts.chart('graficaB', {
					 data: {
						 table: 'datatable'
					 },
					 chart: {
						 plotBackgroundColor: null,
						 plotBorderWidth: null,
						 plotShadow: false,
						 type: 'pie'
					 },
					 title: {
						 text: $scope.title
					 },
					 subtitle: {
						text: $scope.subtitle
					},
					 tooltip: {
						 pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
					 },
					 plotOptions: {
						 pie: {
							 allowPointSelect: true,
							 cursor: 'pointer',
							 dataLabels: {
								 enabled: false
							 },
							 showInLegend: true
						 }
					 },
					 legend: {
						 align: 'left',
						 layout: 'vertical',
						 verticalAlign: 'middle',
						 x: 40,
						 y: 0,
						 shadow: true
					 }
				});
		})
	}
	function graficabarra2(){
		Highcharts.chart('graficaA1', {
			data: {
				table: 'datatable'
			},
			chart: {
				type: 'column',
				zoomType: 'x',
			},
			title: {
				text: $scope.title
			},
			subtitle: {
				text: $scope.subtitle
			},
			xAxis: {
				type: 'category',
				title: {
					text: $scope.title
				}
			},
			yAxis: {
				// allowDecimals: false,
				title: {
					text: 'Total'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
				pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f} </b><br/>'
			},
			legend: {
				//enabled: true
				shadow: true
			},
			plotOptions: {
					series: {
						borderWidth: 0,
						dataLabels: {
							enabled: true,
							format: '{point.y:.0f}'
						}
					}
				},
				//series:this.title
				/*series: [{
				   data :this.title
				   }]*/

				//series: 
		});
	}
});
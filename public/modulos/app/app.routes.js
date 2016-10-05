(function () {
	'use strict';
	angular.module('toneles').config(appRoutes);

	appRoutes.$inject = ['$stateProvider','$locationProvider'];

	function appRoutes($stateProvider, $locationProvider) {

		$locationProvider.html5Mode(true).hashPrefix('!');

		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'modulos/home/home.view.html',
			controler: 'homeController',
			controllerAs: 'vm'

		})
		.state('home.categorias',{
			url: '/categorias',
			templateUrl:  'modulos/home/categorias.view.html',
			controler: 'categoriasController',
			controllerAs: 'vm'
		})
		.state('home.productopequeño',{
			url: '/productopequeño',
			templateUrl:  'modulos/home/productopequeño.view.html',
			controler: 'productopequeñoController',
			controllerAs: 'vm'
		})
		.state('home.productodetalle',{
			url: '/productodetalle',
			templateUrl:  'modulos/home/productodetalle.view.html',
			controler: 'productodetalleController',
			controllerAs: 'vm'
		});

	}
})();
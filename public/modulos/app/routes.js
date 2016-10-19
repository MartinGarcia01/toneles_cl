(function () {
  'use strict';
  angular.module('toneles').config(appRoutes);

  appRoutes.$inject = ['$stateProvider','$locationProvider'];

  function appRoutes($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider.state('portada', {
      url: '/portada',
      templateUrl: 'modulos/portada/portada.view.html',
      controller: 'portadaController',
      controllerAs: 'vm'
    })
    .state('catalogo',{
      url: '/catalogo',
      templateUrl:  'modulos/catalogo/catalogo.view.html',
      controller: 'catalogoController',
      controllerAs: 'vm'
    })
    .state('producto',{
      url: '/producto',
      templateUrl:  'modulos/producto/producto.view.html',
      controller: 'productoController',
      controllerAs: 'vm'
    })
    .state('login',{
      url: '/login',
      templateUrl:  'modulos/login/login.view.html',
      controller: 'loginController',
      controllerAs: 'vm'
    });

  }
})();
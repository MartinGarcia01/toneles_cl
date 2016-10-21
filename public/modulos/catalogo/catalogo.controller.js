(function() {
  angular.module('toneles').controller('catalogoController', catalogoController);

  catalogoController.$inject = ['CatalogoService'];

  function catalogoController(CatalogoService) {
    //
    var vm = this;

    var catalogo = CatalogoService;

    vm.productos = catalogo.get();

    console.log(vm.productos);
  }
})() ;
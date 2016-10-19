(function() {
  angular.module('toneles').controller('catalogoController', catalogoController);

  catalogoController.$inject = [];

  function catalogoController() {
    //
    var vm = this;

    vm.msg = "catalogo";

    console.log('catalogo');
  }
})() ;
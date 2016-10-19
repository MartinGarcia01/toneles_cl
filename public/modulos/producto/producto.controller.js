(function() {
  angular.module('toneles').controller('productoController', productoController);

  productoController.$inject = [];

  function productoController() {
    //
    var vm = this;

    vm.msg = 'producto';

    console.log('producto');
  }
})() ;
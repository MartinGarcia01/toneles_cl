(function() {
  angular.module('toneles').controller('productoController', productoController);

  productoController.$inject = [];

  function productoController() {
    //
    var vm = this;

    vm.titulo = "Cerveza bock";
    vm.formato ="500 cc";
    vm.descrip = "cerveza bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla";
    vm.precio = 1500;
    vm.url_img= "/imagenes/bocks.jpg"

    console.log('producto');
  }
})() ;
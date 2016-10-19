(function() {
  angular.module('toneles').controller('loginController', loginController);

  loginController.$inject = [];

  function loginController() {
    //
    var vm = this;

    vm.msg = "login"

    console.log('login');
  }
})() ;
(function () {
  angular.module('toneles').service('CatalogoService', CatalogoService );

  CatalogoService.$inject = [];

  function CatalogoService() {
    this.get = function () {
      return [
        {
          titulo: 'Cerveza bock',
          formato:'500 cc',
          descrip: 'cerveza bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
          precio: 1500,
          url_img: '/imagenes/bocks.jpg'
        },{
          titulo: 'Cerveza bock2',
          formato:'500 cc',
          descrip: 'cerveza bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
          precio: 1500,
          url_img: '/imagenes/bocks.jpg'
        },{
          titulo: 'Cerveza bock',
          formato:'500 cc',
          descrip: 'cerveza bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
          precio: 1500,
          url_img: '/imagenes/bocks.jpg'
        },{
          titulo: 'Cerveza bock',
          formato:'500 cc',
          descrip: 'cerveza bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
          precio: 1500,
          url_img: '/imagenes/bocks.jpg'
        },{
          titulo: 'Cerveza bock2',
          formato:'500 cc',
          descrip: 'cerveza bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
          precio: 1500,
          url_img: '/imagenes/bocks.jpg'
        },{
          titulo: 'Cerveza bock',
          formato:'500 cc',
          descrip: 'cerveza bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
          precio: 1500,
          url_img: '/imagenes/bocks.jpg'
        }
      ];
    };
  }

})();


(function () {
    'use strict';

    angular
        .module('App')
        .controller('CarroController', CarroController);

    CarroController.$inject = ['$scope']

    function CarroController($scope) {
        var vm = this;

        vm.titulo = 'View Carro';
    };    

})();
(function () {
    
    angular
        .module('App')
        .controller('UsuarioController', UsuarioController);

    UsuarioController.$inject = ['$scope']

    function UsuarioController($scope) {
        var vm = this;

        vm.titulo = 'View Usuario';        

        vm.customer = {
            name: 'Fernando',
            address: 'Florais'
        };
    }

})();
(function () {

    angular
        .module('App', ['ngRoute'])
        .config(config);

    config.$inject = ['$routeProvider']

    function config($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'Home/Index'
        })
        .when('/Carro', {
            templateUrl: 'Carro/Index',
            controller: 'CarroController',
            controllerAs: 'vm'
        })
        .when('/Usuario', {
            templateUrl: 'Usuario/CadastroUsuario',
            controller: 'UsuarioController',
            controllerAs: 'vm'
        }).
        otherwise({
            redirectTo: '/'
        });
    }

})();
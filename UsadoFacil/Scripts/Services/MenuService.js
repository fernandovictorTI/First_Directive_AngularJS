(function () {

    angular
        .module('App')
        .service('MenuService', MenuService);

    MenuService.$inject = ['$http'];

    function MenuService($http) {
        var getMenu = function () {

            return $http.get('/Menu/GetMenu').then(function (response) {                
                return response.data;
            });

        };

        return {
            getMenu: getMenu
        };
    }

})();
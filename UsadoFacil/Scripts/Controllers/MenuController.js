(function () {

    angular
        .module('App')
        .controller('MenuController', MenuController);

    MenuController.$inject = ['$scope', 'MenuService'];

    function MenuController($scope, MenuService) {

        var vm = this;

        vm.getMenu = getMenu;
        vm.menu = [];

        function getMenu() {
            MenuService.getMenu().then(function (response) {
                vm.menu = response;
            });
        }

        getMenu();
    }

})();
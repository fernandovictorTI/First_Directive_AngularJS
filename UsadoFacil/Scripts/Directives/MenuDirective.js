(function () {

    angular
        .module('App')
        .directive('menuDirective', menuDirective);    

    function menuDirective() {
        return {
            restrict: 'E',
            scope: {
                menu: "="
            },
            template:
                      '<nav class="navbar navbar-inverse navbar-fixed-top">' +
                          '<div class="container">'+
                              '<div class="collapse navbar-collapse">' +
                                  '<ul class="nav navbar-nav">' +
                                    '<li ng-repeat="item in menu">'+
                                      '<a href="{{item.Link}}">{{item.Nome}}</a>' +
                                    '</li>'+
                                  '</ul>'+
                              '</div>' +
                          '</div>' +
                      '</nav>'
        };
    }

})();
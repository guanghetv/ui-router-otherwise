/**
 * Created by solomon on 15/1/14.
 */
+function () {
    angular.module('ui.router.otherwise',['ui.router'])
        .provider('otherwise', ['$urlRouterProvider', function ($urlRouterProvider) {
            var url = '';
            this.path = function (url) {
                $urlRouterProvider.otherwise(function ($injector, $location) {
                    $('body>[ui-view]').html('');
                    var routes = $injector.get('$route').routes;
                    for(var key in routes){
                        if(routes[key].regexp.test($location.$$url))
                            return $location.$$url;
                    }
                    return url;
                });
            };

            this.$get = function(){
                return {
                    url: url
                }
            };
        }]);
}();

var notification = function(){
    if(typeof alt.modules.notification !== 'undefined')
        return;
    
    alt.modules.notification = angular.module('alt-notification', [])
        .factory('$notification', ['$log', '$rootScope', '$q', function ($log, $rootScope, $q) {
            return {
                count: 0,
                notif: {},
                isgetnotif: false,
                get: function(){
                    // replaced by notification/controller
                }
            };
        }])
        .run(['$log', '$notification', '$rootScope', function ($log, $notification, $rootScope) {
            $rootScope.notif = {};
            $rootScope.$notification = $notification;

            $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
                $rootScope.$notification.get();
            });
        }]);

    alt.module('alt-notification', alt.modules.notification);
};

if(typeof define !== 'undefined') {
    define([], function () {
        notification();
    });
}else{
    notification();
}
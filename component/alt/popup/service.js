var popup = function(){
    if(typeof alt.modules.popup !== 'undefined')
        return;
    
    alt.modules.popup = angular.module('alt-popup', [])
        .factory('$popup', ['$log', '$rootScope', '$q', function ($log, $rootScope, $q) {
            return {
                deferred: null,
                alert: function (config) {
                    return this.show('alert', config);
                },
                confirm: function (config) {
                    return this.show('confirm', config);
                },
                prompt: function (config) {
                    return this.show('prompt', config);
                },

                show: function (type, config) {
                    this.deferred = $q.defer();

                    angular.forEach(config, function (val, key) {
                        $rootScope.$popup[key] = val;
                    });
                    $rootScope.$popup.type = true;
                    $rootScope.$popup.isshow = true;
                    if (type == 'prompt') {
                        $rootScope.$popup.showinput = true;
                    }

                    return this.deferred.promise;
                },
                close: function (status) {
                    $rootScope.$popup.isshow = false;
                    $rootScope.$popup.response.status = status;
                    this.deferred.resolve($rootScope.$popup.response);
                }
            };
        }])
        .run(['$log', '$timeout', '$rootScope', function ($log, $timeout, $rootScope) {
            $rootScope.$popup = {};
        }]);

    alt.module('alt-popup', alt.modules.popup);
};

if(typeof define !== 'undefined') {
    define([], function () {
        popup();
    });
}else{
    popup();
}
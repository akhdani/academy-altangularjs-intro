define([
    'asset/lib/moment/min/moment-with-locales.min'
], function(moment){
    moment.locale('id');

    return ['$scope', '$log', '$interval', '$timeout', '$rootScope', function($scope, $log, $interval, $timeout, $rootScope){
        $scope.data = [];
        $scope.moment = moment();
        $scope.time = moment().format('DD MMM YYYY HH:mm:ss');

        $interval(function(){
            $scope.time = moment().format('DD MMM YYYY HH:mm:ss');
        }, 1000);
    }];
});
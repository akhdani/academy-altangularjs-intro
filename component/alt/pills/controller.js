define([

], function(){
    return ['$scope', '$log', '$timeout', '$rootScope', '$compile', function($scope, $log, $timeout, $rootScope, $compile){
        $scope.steps = [{title: 'Pills', isactive: false}];
        $scope.current = 0;
        $scope.onselect = angular.noop;
        $scope.select = function(stepid){
            var previd = $scope.current;
            angular.forEach($scope.steps, function(value, key){
                value.isactive = false;
            });
            $scope.steps[stepid].isactive = true;
            $scope.current = stepid;

            // call onselect
            $scope.onselect(stepid, previd);
        };

        $timeout(function(){
            $scope.select(0);
        });
    }];
});
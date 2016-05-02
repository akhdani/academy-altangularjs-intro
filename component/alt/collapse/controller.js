define([

], function(){
    return ['$scope', '$log', '$timeout', '$rootScope', '$compile', function($scope, $log, $timeout, $rootScope, $compile){
        $scope.panels = [{title: 'Pills', isactive: false}];
        $scope.current = 0;
        $scope.ismultiple = false;
        $scope.onselect = angular.noop;
        $scope.select = function(stepid){
            var previd = $scope.current;

            if(!$scope.ismultiple){
                angular.forEach($scope.panels, function(value, key){
                    if(key != stepid) value.isactive = false;
                });
            }
            $scope.panels[stepid].isactive = !$scope.panels[stepid].isactive;
            $scope.current = stepid;

            // call onselect
            $scope.onselect(stepid, previd);
        };

        $timeout(function(){
            $scope.select(0);
        });
    }];
});
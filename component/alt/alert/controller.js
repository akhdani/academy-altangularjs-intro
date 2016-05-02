define([

], function(){
    return ['$scope', '$log', '$timeout', '$alert', function($scope, $log, $timeout, $alert){
        $scope.id = 0;
        $scope.type = 'warning';
        $scope.isshow = true;
        $scope.skip = 0;
        $scope.iscloseable = true;

        $scope.show = function(){
            if($scope.skip != 0) return;

            $scope.isshow = true;
        };
        $scope.hide = function(){
            $scope.isshow = false;
        };
    }];
});
define([

], function(){
    return ['$scope', '$log', '$timeout', '$rootScope', function($scope, $log, $timeout, $rootScope){
        $scope.title = '';
        $scope.description = '';
        $scope.breadcrumb = [];
    }];
});
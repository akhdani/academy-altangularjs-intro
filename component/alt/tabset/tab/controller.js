define([
], function () {
    return ['$scope', '$log', '$controller', function ($scope, $log, $controller) {
        $scope.tab = alt.extend({
            id:$scope.$id,
            title:$scope.title || '',
            detail:{
                callFunc:function () {
                }
            },
            show:true,
            selected:false
        }, $scope.tab);

        $controller.add($scope.tab);
    }]

});
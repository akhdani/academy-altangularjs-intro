define([
    'component/alt/tabset/tab/controller'
], function () {
    return ['$scope', '$log', function ($scope, $log) {
        var tabs = $scope.tabs = [];

        $scope.select = function (tab) {
            angular.forEach(tabs, function (tab) {
                tab.selected = false;
            });
            tab.detail.callFunc();
            tab.selected = true;
        };

        this.add = $scope.add = function (tab) {
            if (tabs.length === 0 && tab.show) {
                $scope.select(tab);
            }
            tabs.push(tab);
        };

        $scope.tabset = alt.extend({
            select:$scope.select,
            add:$scope.add
        }, $scope.tabset);
    }]
});
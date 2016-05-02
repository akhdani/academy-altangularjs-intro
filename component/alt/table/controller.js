define([

], function(){
    return ['$scope', '$log', '$rootScope', '$timeout', '$export', function($scope, $log, $rootScope, $timeout, $export){
        // table data
        $scope.id = 'table' + $scope.$id;
        $scope.filter = {};
        $scope.data = [];
        $scope.total_data = [];
        $scope.total = 0;
        $scope.limit = 20;
        $scope.offset = 0;
        $scope.range = 3;
        $scope.order = {};
        $scope.delay = 500;
        $scope.view_data = [{
            label: '5',
            value: 1
        }, {
            label: '10',
            value: 10
        }, {
            label: '20',
            value: 20
        }, {
            label: '50',
            value: 50
        }, {
            label: 'Seluruh Data',
            value: -1
        }];

        // pagination
        $scope.current_page = 1;
        $scope.total_page = 1;
        $scope.pager = [];
        $scope.isshowpagination = true;
        $scope.isshowviewdata = true;

        // watch total data, on data dummy or server side send all data
        $scope.$watch('total_data', function(newvalue, oldvalue){
            $scope.total = $scope.total_data.length;
            $scope.page($scope.current_page);
        });

        // watch total
        $scope.$watch('total', function(newvalue, oldvalue){
            $scope.total_page = $scope.limit > 0 ? Math.ceil($scope.total / $scope.limit) : 1;
            $scope.pagination();
        });

        // order
        $scope.sort = function(key){
            if(typeof $scope.order[key] === 'undefined'){
                $scope.order[key] = true;
            }else if($scope.order[key]){
                $scope.order[key] = false;
            }else{
                delete $scope.order[key];
            }
            $scope.reload($scope.params());
        };

        // create pagination
        $scope.pagination = function(){
            $scope.pager = [];

            var min = ($scope.current_page - $scope.range) > 0 ? $scope.current_page - $scope.range : 1,
                max = ($scope.current_page + $scope.range) < $scope.total_page ? $scope.current_page + $scope.range : $scope.total_page;

            if(min > $scope.range+1){
                for(var i=1; i<=$scope.range; i++){
                    $scope.pager.push(i);
                }
                $scope.pager.push('...');
            }

            for(var i=min; i<=max; i++){
                $scope.pager.push(i);
            }

            if(max < $scope.total_page){
                $scope.pager.push('...');
                for(var i=$scope.range-1; i>=0; i--){
                    $scope.pager.push($scope.total_page - i);
                }
            }
        };

        // set view data
        $scope.view = function(view){
            $scope.limit = view == -1 ? $scope.total : view;
            $scope.total_page = Math.ceil($scope.total / $scope.limit);
            $scope.page(1);
        };

        // set page
        $scope.page = function(pagenumber){
            if(parseInt(pagenumber) <= 0) return;
            if(pagenumber < 1 || pagenumber > $scope.total_page) return;

            $scope.offset = $scope.limit * (pagenumber-1);
            $scope.current_page = pagenumber;
            $scope.pagination();
            $scope.reload($scope.params());
        };

        // reload data
        $scope.isloading = null;
        $scope.reload = function(params){
            var data = angular.copy($scope.total_data);
            $scope.data = data.splice($scope.offset, $scope.limit > 0 ? $scope.limit : $scope.total);
        };

        // watch filter
        $scope.$watchCollection('filter', function(newvalue, oldvalue){
            if(newvalue != oldvalue)
                $scope.reload($scope.params());
        });

        // generate params
        $scope.params = function(){
            var param = angular.copy($scope.filter);
            param.limit = $scope.limit;
            param.offset = $scope.offset;
            param.order = '';

            angular.forEach($scope.order, function(val, key){
                param.order += (param.order == '' ? '' : ', ') + key + ' ' + (val === true ? 'asc' : 'desc');
            });

            if ($scope.isloading != null && $scope.isloading.abort)
                $scope.isloading.abort();

            return param;
        };

        // export to excel
        $scope.excel = function(){
            $export.excel(document.getElementById($scope.id).innerHTML);
        };

        $timeout(function(){
            $scope.page(1);
        });
    }];
});
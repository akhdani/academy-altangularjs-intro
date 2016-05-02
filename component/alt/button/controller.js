define([
    'component/alt/button/service'
], function(){
    return ['$scope', '$log', '$button', '$rootScope', '$element', function($scope, $log, $button, $rootScope, $element){
        $scope.title = '';
        $scope.description = '';
        $scope.onclick = angular.noop;
        $scope.href = '';
        $scope.href2 = '';
        $scope.icon = '';
        $scope.style = '';
        $scope.disabled = false;

        $scope.click = function(){
            if($scope.disabled || $scope.isclicked || $scope.href != '') return;

            var title = $scope.title;
            $scope.isclicked = true;
            $scope.title = $scope.title_clicked || title;

            var click = $scope.onclick($scope);
            if(typeof click !== 'undefined' && typeof click.then === 'function'){
                click.then(function(){
                    $scope.isclicked = false;
                    $scope.title = title;
                }, function(){
                    $scope.isclicked = false;
                    $scope.title = title;
                });
            }else{
                $scope.isclicked = false;
                $scope.title = title;
            }
        };

        $scope.$watch('disabled', function(value){
            if(value && $scope.href != ''){
                $scope.href2 = $scope.href;
                $scope.href = 'javascript:;';
            }else if(!value && $scope.href2 != '' && $scope.href != 'javascript:;'){
                $scope.href = $scope.href2;
                $scope.href2 = '';
            }
        });

        $element.attr('style', 'display:inline-block; margin-right: 5px;' + $scope.style);
    }];
});
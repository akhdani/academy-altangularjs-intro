define([
    'component/alt/button/service'
], function () {
    return ['$scope', '$log', '$rootScope', '$button', '$popup', function ($scope, $log, $rootScope, $button, $popup) {
        $scope.response = {
            status: false,
            data: ''
        };
        
        $scope.title = '';
        $scope.caption = '';
        $scope.isshow = false;
        $scope.showinput = false;
        $scope.buttons = [
            $button('yes', {
                onclick: function(){
                    $popup.close(true);
                }
            }),
            $button('no', {
                onclick: function(){
                    $popup.close(false);
                }
            })
        ];

    }]
});
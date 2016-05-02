define([
], function(){
    return ['$scope', '$log', '$element', function($scope, $log, $element){
        $scope.elementid = 'file' + $scope.$id;
        $scope.required = $scope.required || false;
        $scope.disabled = $scope.disabled || false;
        $scope.accept = $scope.accept || "application/pdf";
        $scope.name = $scope.name || $scope.elementid;
        $scope.class = $scope.class || "";
        $scope.style = $scope.style || "";
        $scope.model = $scope.model || null;
        $scope.isupload = $scope.isupload || true;
        $scope.isview = $scope.isview || true;
        $scope.data = $scope.data || [];

        //data harusnya array bukan objek
        if(!Array.isArray($scope.data)) $scope.data = [];

        $scope.clear = function(){
            if($scope.element) {
                $scope.element.value = null;
            }
            $scope.data = [];
        };

        // set image on change
        $scope.onchange= function(element){
            $scope.element = document.getElementById($scope.elementid);
            var file = angular.element($scope.element)[0].files[0];
            if($scope.validate(file)){
                $scope.model = file;
                $scope.$apply();
            }else{
                $scope.clear();
            }
        };
        $scope.validate = $scope.validate || function(file){
            return true;
        };

        $scope.element = angular.element($element).children()[0];
    }];
});
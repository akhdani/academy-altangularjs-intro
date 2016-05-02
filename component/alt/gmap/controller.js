define([
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyDnQXTRuq1U7coHbsJLVi4S9F9M7VaDFXw&v=3.exp&libraries=places,visualization'
], function(){
    return [
        '$scope', '$log', '$alert', '$element', '$timeout',
        function($scope, $log, $alert, $element, $timeout){
            $scope.ismapshow = true;
            $scope.style = 'min-height: 350px;';
            $scope.element = $element.children()[1];
            $scope.markers = [];
            $scope.map = new google.maps.Map($scope.element, {
                center: new google.maps.LatLng(1.121520, 104.045267),
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false
            });

            $scope.resize = function(){
                $timeout(function(){
                    google.maps.event.trigger($scope.map, "resize");
                });
            };

            $scope.center = function(lat, long){
                $scope.map.panTo(new google.maps.LatLng(lat, long));
            };

            $scope.marker = function(lat, long){
                $scope.markers.push(new google.maps.Marker({
                    position: {
                        lat: parseFloat(lat),
                        lng: parseFloat(long)
                    },
                    map: $scope.map
                }));
            };
        }
    ];
});
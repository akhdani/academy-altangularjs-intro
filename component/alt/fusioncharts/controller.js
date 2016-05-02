requirejs.s.contexts._.config.shim['asset/js/fusioncharts-suite-xt/js/fusioncharts-charts' + (alt.useMinified ? '.min' : '')] = {
    deps: ['asset/js/fusioncharts-suite-xt/js/fusioncharts' + (alt.useMinified ? '.min' : '')]
};
requirejs.s.contexts._.config.shim['asset/js/fusioncharts-suite-xt/js/fusioncharts-gantt' + (alt.useMinified ? '.min' : '')] = {
    deps: ['asset/js/fusioncharts-suite-xt/js/fusioncharts' + (alt.useMinified ? '.min' : '')]
};
requirejs.s.contexts._.config.shim['asset/js/fusioncharts-suite-xt/js/fusioncharts-powercharts' + (alt.useMinified ? '.min' : '')] = {
    deps: ['asset/js/fusioncharts-suite-xt/js/fusioncharts' + (alt.useMinified ? '.min' : '')]
};
requirejs.s.contexts._.config.shim['asset/js/fusioncharts-suite-xt/js/fusioncharts-widgets' + (alt.useMinified ? '.min' : '')] = {
    deps: ['asset/js/fusioncharts-suite-xt/js/fusioncharts' + (alt.useMinified ? '.min' : '')]
};
requirejs.s.contexts._.config.shim['asset/js/fusioncharts-suite-xt/js/fusioncharts-maps' + (alt.useMinified ? '.min' : '')] = {
    deps: ['asset/js/fusioncharts-suite-xt/js/fusioncharts' + (alt.useMinified ? '.min' : '')]
};

define([
    'asset/js/fusioncharts-suite-xt/js/fusioncharts',
    'asset/js/fusioncharts-suite-xt/js/fusioncharts-charts',
    'asset/js/fusioncharts-suite-xt/js/fusioncharts-powercharts',
    'asset/js/fusioncharts-suite-xt/js/fusioncharts-widgets',
    'asset/js/fusioncharts-suite-xt/js/fusioncharts-maps',
    'asset/js/fusioncharts-suite-xt/js/fusioncharts-gantt'
], function(){
    return ['$scope', '$log', '$element', '$timeout', function($scope, $log, $element, $timeout){
        $scope.elementid    = "fusioncharts" + $scope.$id;
        $scope.objchart     = null;

        $scope.style = '';
        $scope.class = '';
        $scope.type = '';
        $scope.dataFormat = 'json';
        $scope.width = '100%';
        $scope.height = '100%';
        $scope.dataSource = {
            chart: {
                chartLeftMargin: 0,
                chartRightMargin: 0,
                paletteColors: "#5479aa,#bd5151,#75b045,#4e4e4e,#53a6a6,#bb6096,#edb758,#c2c70e,#c75600,#c71e4e,#58c7a2,#dfb06b,#98c72e",
                bgColor: "#ffffff",
                usePlotGradientColor: "0",
                showplotborder: "0",
                valueFontColor: "#ffffff",
                rotateValues: "1",
                showXAxisLine: "1",
                xAxisLineThickness: "1",
                xAxisLineColor: "#999999",
                showAlternateHGridColor: "0",
                legendBgAlpha: "0",
                showBorder: "0",
                use3DLighting: "1",
                labelDistance: "0",
                showShadow: "1",
                enableSmartLabels: "1",
                showPercentValues: "1",
                showPercentInTooltip: "0",
                decimals: "1",
                captionFontSize: "14",
                subcaptionFontSize: "14",
                subcaptionFontBold: "0",
                toolTipColor: "#ffffff",
                toolTipBorderThickness: "0",
                toolTipBgColor: "#000000",
                toolTipBgAlpha: "80",
                toolTipBorderRadius: "2",
                toolTipPadding: "5",
                showHoverEffect: "1",
                showLegend: "1",
                legendBgColor: "#ffffff",
                legendBorderAlpha: "0",
                legendShadow: "1",
                legendItemFontSize: "10",
                legendItemFontColor: "#666666",
                useDataPlotColorForLabels: "1"
            }
        };

        $scope.reload       = function(){
            $timeout(function(){
                $scope.renderAt = document.getElementById($scope.elementid);

                $scope.objchart = new FusionCharts({
                    renderAt: $scope.renderAt,
                    type: $scope.type,
                    dataFormat: $scope.dataFormat,
                    width: $scope.width,
                    height: $scope.height,
                    dataSource: $scope.dataSource
                });
                $scope.objchart.render();
            });
        };

        $scope.export = function(config){
            if($scope.objchart == null)
                return;

            $scope.objchart.exportChart(config);
        };

        $scope.reload();
    }];
});
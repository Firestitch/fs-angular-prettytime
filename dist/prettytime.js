(function () {
    'use strict';


    /**
     * @ngdoc filter
     * @name app.filter:prettytime
     * @description
     * 
     */

    angular.module('fs-prettytime', [])
    .filter('prettytime', function(prettytimeService) {
      return function(value,round,abr,suffix,input) {
     
        if(input=='duration') {
            value = prettytimeService.format(value,round,abr,suffix,input);
        
        } else {
          value = prettytimeService.formatTimestamp(value,round,abr,suffix,input);
        }

        return value;
      };
    });

})();
(function () {
    'use strict';


    /**
     * @ngdoc directive
     * @name app.directives:prettytime
     * @description
     * The pretty time directive
     * @restrict E
     */

     /*

    
    angular.module('fs-prettytime',[])
    .directive('prettytime', function ($compile, $sce, $filter, prettytimeService) {

        return {
            restrict: 'E',            
            scope: {
                ptInput: '@',
                ptAbr: '@',
                ptSuffix: '@'
            },
            link: function($scope, element, attr, ctrl) { 
                debugger;
                var value = element.text();

                element.text('{{' + value + '|prettytime:' + $scope.ptAbr + ':' + $scope.ptSuffix + ':' + $scope.ptInput + '}}');
            }
        }
    });
    */

})();
(function () {

















































































































angular.module('build').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/directives/directive.html',
    ""
  );

}]);
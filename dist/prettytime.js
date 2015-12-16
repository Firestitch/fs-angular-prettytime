(function () {
    'use strict';
    
	angular.module('fs-angular-prettytime',[]);


})();
(function () {
    'use strict';

    /**
     * @ngdoc filter
     * @name app.filter:prettytime
     * @param {bool=} [round=true] Rounds the pretty time. ie: 5d 12h (not rounded) 5d (rounded) 
     * @param {bool=} [abr=true] Abbriviate the units of measurement. ie: 5d (abbreviated) 5 days (not abbreviated) 
     * @param {bool=} [suffix=false] add the word 'ago' or 'from now' to the end of the pretty string
     * @param {string=} [input=time] Specifies if the value is a date/timestamp (time) or the duration in seconds (duration).
     * @description Converts time to a readable format. ie: Duration 6566533 = 7 days
     */

    angular.module('fs-angular-prettytime')
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


     /*

    
    angular.module('fs-angular-prettytime')
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

















































































































angular.module('fs-angular-prettytime').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/directives/directive.html',
    ""
  );

}]);
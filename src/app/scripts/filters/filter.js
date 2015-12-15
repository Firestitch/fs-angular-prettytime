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
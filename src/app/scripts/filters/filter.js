(function () {
    'use strict';

    /**
     * @ngdoc filter
     * @name app.filter:prettytime
     * @param {int|Date} value The time represented as a Date object or a Unix timestamp in seconds (when type is set to 'time')<br>Duration represented in seconds (when type is set to 'duration') 
     * @param {bool=} [round=true] Rounds the pretty time. ie: 5d 12h (not rounded) 5d (rounded) 
     * @param {bool=} [abr=true] Abbriviate the units of measurement. ie: 5d (abbreviated) 5 days (not abbreviated) 
     * @param {bool=} [suffix=false] add the word 'ago' or 'from now' to the end of the pretty string
     * @param {string=} [type=time] Specifies if the value is a date/timestamp (time) or the duration in seconds (duration).
     * @description Converts time to a readable format. ie: Duration 6566533 = 7 days
     */

    angular.module('fs-angular-prettytime')
    .filter('prettytime', function(prettytimeService) {
      return function(value,round,abr,suffix,type) {
     
        if(type=='duration') {
            value = prettytimeService.format(value,round,abr,suffix,type);
        
        } else {
          value = prettytimeService.formatTimestamp(value,round,abr,suffix,type);
        }

        return value;
      };
    });

})();
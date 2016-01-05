(function () {
    'use strict';
    
	angular.module('fs-angular-prettytime',[]);


})();
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
(function () {
    'use strict';

})();
(function () {
    'use strict';

    /**
     * @ngdoc interface
     * @name app.services:prettytimeService
     * @description
     * 
     */

    angular.module('fs-angular-prettytime')
    .factory('prettytimeService', function () {
       
        var service = {        
            format:format,
            formatTimestamp: formatTimestamp
        };
       
        return service;

        function plural(word,count) {
            if(count==1)
                return word;
            return pluralize.plural(word);
        }

        /**
         * @ngdoc method
         * @name format
         * @methodOf app.services:prettytimeService
         * @param {number|date} timestamp A numeric timestamp or a Date object
         * @param {bool=} [round=true] Rounds the pretty time. ie: 5d 12h (not rounded) 5d (rounded) 
         * @param {bool=} [abr=true] Abbriviate the units of measurement. ie: 5d (abbreviated) 5 days (not abbreviated) 
         * @param {bool=} [suffix=false] add the word 'ago' or 'from now' to the end of the pretty string
         * @description Accepts a difference in time and return a pretty formated version ie. 6566533 = 7 days
         */
        function formatTimestamp(timestamp,round,abr,suffix) {
            
            if(timestamp instanceof Date)
                timestamp = timestamp.getTime()/1000;           

            var now = (new Date()).getTime()/1000;

            return format(now - timestamp,round,abr,suffix);
        }

        /**
         * @ngdoc method
         * @name format
         * @methodOf app.services:prettytimeService
         * @param {number} timestamp A numeric timestamp
         * @param {bool=} [round=true] Rounds the pretty time. ie: 5d 12h (not rounded) 5d (rounded) 
         * @param {bool=} [abr=true] Abbriviate the units of measurement. ie: 5d (abbreviated) 5 days (not abbreviated) 
         * @param {bool=} [suffix=false] add the word 'ago' or 'from now' to the end of the pretty string
         * @description Accepts a difference in time and return a pretty formated version ie. 6566533 = 7 days
         */
        function format(time,round,abr,suffix) {

            var limits = {  second: 60,         //60 seconds
                            minute: 3600,       //1 hour
                            hour: 86400,        //24 hours
                            day: 2628028,       //30.417 days
                            month: 15768172 };  //6 months

            if(time==="") return "";

            time = parseInt(time);

            if(time===0) return "now";

            var suffix = suffix===true ? (time>0 ? " ago" : " from now") : "";
            var abr = abr===undefined ? true : abr;
            var round = round===undefined ? false : round;

            if(time<=limits.second)
                return time + (abr ? "s" : plural(" second",time)) + suffix;

            var remainder_seconds = Math.floor(time % 60);
            remainder_seconds = remainder_seconds + (abr ? "s" : plural(" second",remainder_seconds));

            var minutes = Math.round(time/60);

            if(time<=limits.minute)
                return minutes + (abr ? "m" : plural(" minute",minutes)) + (round ? "" : " " + remainder_seconds) + suffix;
        
            var hours = time / 3600;
            hours = round ? Math.round(hours) : Math.floor(hours);

            var remainder_minutes = Math.floor((time % limits.minute)/60);
            remainder_minutes = remainder_minutes + (abr ? "m" : plural(" minute",remainder_minutes));

            if(time<=limits.hour)
                return hours + (abr ? "h" : plural(" hour",hours)) + (round ? "" : " " + remainder_minutes) + suffix;
            
            var days = time / 3600 / 24;
            days = round ? Math.round(days) : Math.floor(days);

            var remainder_hours = Math.floor((time % limits.hour)/60/60);
            remainder_hours = remainder_hours + (abr ? "h" : plural(" hour",remainder_hours));          

            if(time<=limits.day)
                return days + (abr ? "d" : plural(" day",days,false)) + (round ? "" : " " + remainder_hours) + suffix;   

            var months = time / 3600 / 24 / 30.417;
            months = round ? Math.round(months) : Math.floor(months);         

            var remainder_days = Math.floor((time % limits.day)/60/60/24);
            remainder_days = remainder_days + (abr ? "d" : plural(" day",remainder_days,false));            

            return months + (abr ? "m" : plural(" month",months,false)) + (round ? "" : " " + remainder_days) + suffix;  
        }
    });
})();

angular.module('fs-angular-prettytime').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/directives/directive.html',
    ""
  );

}]);

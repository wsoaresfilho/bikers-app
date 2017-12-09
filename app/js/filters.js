'use strict';

angular.module('myApp.filters', [])

.filter('daysOfWeek', function() {
  return function(days) {
    var result;

    function isEveryDay(days) {
      var flag = true;
      for(var x in days) {
        if(days[x] == false) flag = false;
      }
      return flag;
    }

    function isWeekDay(days) {
      if (days.Mon && days.Tue &&
          days.Wed && days.Fri &&
          days.Fri && !days.Sun && !days.Sat) {
            return true;
          }
      return false;
    }

    function isWeekend(days) {
      if (!days.Mon && !days.Tue &&
          !days.Wed && !days.Fri &&
          !days.Fri && days.Sun && days.Sat) {
            return true;
          }
      return false;
    }

    if (isEveryDay(days)) {
      result = "Every day";
    } else if(isWeekDay(days)) {
      result = "Week days";
    } else if(isWeekend(days)) {
      result = "Weekends";
    } else {
      var text = [];
      for(var day in days) {
        if (days[day]) {
          text.push(day);
        }
      }
      result = text.join(', ');
    }

    return result;
  };
})

.filter('onlyText', function() {
  return function(input) {
    var text = input;
    if(input) {
      text = input.replace(/[^a-zA-Z]+/g, '');
    }
    return text;
  };
});
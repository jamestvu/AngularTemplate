(function() {
  'use strict';

  angular
      .module('template')
      .config(function (datepickerConfig) {
          datepickerConfig.showWeeks = false;
      });
})();

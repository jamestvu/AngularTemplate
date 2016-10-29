(function () {
  'use strict';

  angular
      .module('template',
      [
          'ui.router',
          'ui.bootstrap',
          'ui.select',
          'ui.grid',
          'ui.grid.cellNav',
          'ui.grid.grouping',
          'ui.grid.exporter',
          'ui.grid.resizeColumns',
          'ui.grid.saveState',
          'ui.grid.selection',
          'template.Routes',
          'template.page1Module',
          'template.page2Module',
          'eWorldES.GUI.InputModule',
      ]);

})();

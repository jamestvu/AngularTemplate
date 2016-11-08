(function () {
    'use strict';

    angular
        .module('template.page1Module')
        .controller('page1Controller', ['$scope', 'TestService', page1Controller]);

    function page1Controller($scope, TestService) {
        $scope.callService = function () {
            TestService.herp().then(function (data, a) {
                console.info('win');
                console.info(data);
            })
            .catch(function (data) {
                console.info('error');
                console.info('ggeeeweeeee');
                console.info(data);
            })
            .finally(function (data) {
                console.info('gg');
                console.info(data);
            });
        };
    }

})();
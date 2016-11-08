(function () {
    'use strict';

    angular
        .module('template.page1Module')
        .controller('page1Controller', ['$scope', 'TestService', page1Controller]);

    function page1Controller($scope, TestService) {
        $scope.callService = function () {
            TestService.herp().then(function (data) {
                alert(data.name);
            });
        };
    }

})();
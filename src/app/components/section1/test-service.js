(function () {
    'use strict';

    angular
        .module('template')
        .service('TestService', ['$http', TestService]);

    function TestService($http) {
        this.herp = function (id) {
            return $http.get('rest/test/testMessage').then(function (response) {
                return response.data;
            })
            .catch(function (data) {
            });
        };
    }
})();

(function () {
    'use strict';

    angular
        .module('template')
        .controller('tableController', ['$scope', tableController]);

    function tableController($scope) {
    }

    $(document).ready(function () {
        $("p").click(function () {
            alert("u clicked me");
        });
    });

})();
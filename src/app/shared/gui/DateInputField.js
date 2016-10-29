(function() {
    function DateInputField() {
        function DateInputFieldController($scope) {
            $scope.open = function(event) {
                event.preventDefault();
                event.stopPropagation();

                $scope.isOpen = true;
            }
        }

        return {
            restrict: 'A',
            scope: {
                label: '@',
                labelWidth: '=',
                marginTop: '=',
                inputWidth: '=',
                helpMessage: '@',
                model: '=',
                config: '=',
                disabled: '='
            },
            templateUrl: 'app/shared/gui/DateInputField.html',
            controller: ['$scope', DateInputFieldController]
        };
    }
    angular
        .module('eWorldES.GUI.InputModule')
        .directive('dateInputField', DateInputField);
})();
(function() {
    function TextAreaInputField() {
        function TextAreaInputFieldController($scope) {
        }

        return {
            restrict: 'A',
            scope: {
                label: '@',
                labelWidth: '=',
                boxHeight: '=',
                boxWidth: '=',
                helpMessage: '@',
                model: '=',
                validationState: '=',
                onblur : '&?',
                validationMessage: '@',
                disabled: '='
            },
            templateUrl: 'app/shared/gui/TextAreaInputField.html',
            controller: ['$scope', TextAreaInputFieldController]
        };
    }
    angular
        .module('eWorldES.GUI.InputModule')
        .directive('textAreaInputField', TextAreaInputField);
})();

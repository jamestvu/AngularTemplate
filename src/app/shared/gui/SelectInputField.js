(function() {
    function SelectInputField() {
        function SelectInputFieldController($scope) {
            if (!$scope.optionsString) {
                $scope.optionsString = 'option.value as option.label for option in options';
            }
        }

        return {
            restrict: "A",
            scope: {
                label: "@",
                helpMessage: "@",
                model: "=",
                options: "=",
                optionsString: "@",
                validationState: "=",
                validationMessage: "@",
                multiple: "=",
                numVisibleInBox:"=",
                onChange: "&",
                displayOnly: "="
            },
            templateUrl: "app/shared/gui/SelectInputField.html",
            controller: ['$scope', SelectInputFieldController]
        };
    }
    angular
        .module("eWorldES.GUI.InputModule")
        .directive("selectInputField", SelectInputField);
})();

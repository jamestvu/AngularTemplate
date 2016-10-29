(function() {
    function CheckboxInputField() {
        function CheckboxInputFieldController() {
        }

        return {
            restrict: "A",
            scope: {
                label: "@",
                helpMessage: "@",
                model: "=",
                onChange: '=',
                disabled: '='
            },
            templateUrl: "app/shared/gui/CheckboxInputField.html",
            controller: CheckboxInputFieldController
        };
    }
    angular
        .module("eWorldES.GUI.InputModule")
        .directive("checkboxInputField", CheckboxInputField);
})();

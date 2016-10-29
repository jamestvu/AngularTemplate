(function() {
    function TextDisplayField() {
        function TextDisplayFieldController() {
        }

        return {
            restrict: "A",
            scope: {
                label: "@",
                helpMessage: "@",
                model: "=",
                validationState: "=",
                validationMessage: "@"
            },
            templateUrl: "app/shared/gui/TextDisplayField.html",
            controller: TextDisplayFieldController
        };
    }
    angular
        .module("eWorldES.GUI.InputModule")
        .directive("textDisplayField", TextDisplayField);
})();

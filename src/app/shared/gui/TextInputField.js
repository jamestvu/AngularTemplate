(function() {
    function TextInputField() {
        function TextInputFieldController($scope) {
            if (!$scope.size) {
                $scope.size = '';
            }

            $scope.onFocusLost = function () {
                $scope.onBlur();
            };
        }

        return {
            restrict: "A",
            scope: {
                label: "@",
                labelWidth: '@',
                labelTop: '@',
                textboxWidth: '@',
                model: "=",
                validationMessage: "@",
                displayOnly: "=?",
                disabled: "=?",
                maxLength: '=',
                onBlur: '&',
                hasError: '='
            },
            templateUrl: "app/shared/gui/TextInputField.html",
            controller: ['$scope', TextInputFieldController]
        };
    }
    angular
        .module("eWorldES.GUI.InputModule")
        .directive("textInputField", TextInputField);
})();

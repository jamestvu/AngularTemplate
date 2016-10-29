(function() {
    function NumberInputField() {
        function NumberInputFieldController($scope) {
            if (!$scope.size) {
                $scope.size = '';
            }

            $scope.onFocusLost = function () {
                $scope.onBlur();
            }
        }

        return {
            restrict: "A",
            scope: {
                label: "@",
                labelWidth: '@',
                textboxWidth: '@',
                labelTop: '@',
                model: "=",
                validationMessage: "@",
                displayOnly: "=?",
                disabled: "=?",
                maxLength: '=',
                onBlur: '&',
                hasError: '='
            },
            templateUrl: "app/shared/gui/NumberInputField.html",
            controller: ['$scope', NumberInputFieldController]
        };
    }
    angular
        .module("eWorldES.GUI.InputModule")
        .directive("numberInputField", NumberInputField);
})();

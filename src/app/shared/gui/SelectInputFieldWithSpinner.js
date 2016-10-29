(function() {
    function Directive() {
        function Controller($scope) {
            if (!$scope.optionsString) {
                $scope.optionsString = 'option.value as option.label for option in options';
            }
        }

        return {
            restrict: 'A',
            scope: {
                label: '@',
                model: '=',
                options: '=',
                optionsString: '@',
                onChange: '&',
                isLoading: '=',
                emptyMessage: '@',
                isDisabled: '='
            },
            templateUrl: 'SelectInputFieldWithSpinner.html',
            controller: ['$scope', Controller]
        };
    }
    angular
        .module('eWorldES.GUI.InputModule')
        .directive('selectInputFieldWithSpinner', Directive);
})();
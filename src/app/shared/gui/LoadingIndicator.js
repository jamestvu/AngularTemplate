(function() {
    function LoadingIndicator() {
        function LoadingIndicatorController() {
        }

        return {
            restrict: "A",
            scope: {
                isLoading: "=",
                message: "="
            },
            templateUrl: "app/shared/gui/LoadingIndicator.html",
            controller: LoadingIndicatorController
        };
    }
    angular
        .module("eWorldES.GUI.InputModule")
        .directive("loadingIndicator", LoadingIndicator);
})();

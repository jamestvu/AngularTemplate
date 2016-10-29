(function() {
    function PopupController($scope, $modalInstance) {
        $scope.confirm = function() {
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss();
        };
    }
    angular
        .module('eWorldES.GUI.InputModule')
        .controller('PopupController', ['$scope', '$modalInstance', PopupController]);
})();
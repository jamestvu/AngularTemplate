(function() {
    function ConfirmationPopupController($scope, $modalInstance, options) {
        initialize();
        function initialize() {
            $scope.operations = {};
            $scope.options = options || {
                header: 'Perform Action',
                question: 'Are you sure you want to perform this action?'
            };
        }

        $scope.confirm = function() {
            if ($scope.options.onConfirm) {
                $scope.operations.isLoading = true;
                $scope.options.onConfirm().then(function() {
                    $modalInstance.close();
                }).finally(function() {
                    $scope.operations.isLoading = false;
                });
            }
            else {
                $modalInstance.close();
            }
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    }
    angular
        .module('eWorldES.GUI.InputModule')
        .controller('ConfirmationPopupController', ['$scope', '$modalInstance', 'options', ConfirmationPopupController]);
})();


/*
 * [JG]: Use this widget in the following way:
 *****
 var modal = $modal.open(
 {
     templateUrl: '../../common/ConfirmationPopupView.html', //templateUrl will change relative to location being used.
     controller: 'ConfirmationPopupController',
     resolve: {
         options: function() {
             return {
                 header: 'Your Title Here',
                 question: 'Your Question Here?'
                 message: 'Your Message Here'
             }
         }
     }
 }
 );
 modal.result
    .then(function() {
            // action on confirm
    },
    function() {
        //action on cancel
    }
);
*/

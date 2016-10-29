(function () {
    'use strict';

    angular
    .module('template')
    .service('ErrorUtility', ['$modal', Service]);

    function Service($modal) {
        this.showNotification = function (message, title) {
            var modal = $modal.open(
                {
                    templateUrl: 'app/shared/gui/ConfirmationPopupView.html',
                    controller: 'ConfirmationPopupController',
                    resolve: {
                        options: function () {
                            return {
                                header: title ? title : 'Error',
                                question: message,
                                confirmation: true,
                                okText: 'Ok',
                                isCancelDisabled: true
                            };
                        }
                    }
                }
            );
        };

        this.showErrorMessage = function (data) {
            var message = null;
            if ('status' in data && data.status === 403) {
                message = data.data.message;
            }
            else if ('status' in data && data.status === 500) {
                message = "Could not connect to the server.";
            }
            else {
                message = data.headers('errormessage');
            }
            var modal = $modal.open(
                {
                    templateUrl: 'app/shared/gui/ConfirmationPopupView.html',
                    controller: 'ConfirmationPopupController',
                    resolve: {
                        options: function () {
                            return {
                                header: 'Error',
                                question: message ? message : 'An unexpected error has occurred, please try again.',
                                confirmation: true,
                                okText: 'Ok',
                                isCancelDisabled: true
                            };
                        }
                    }
                }
            );
        };

        this.showError = function(response) {
            var modal = $modal.open(
                {
                    templateUrl: 'app/shared/gui/ConfirmationPopupView.html',
                    controller: 'ConfirmationPopupController',
                    resolve: {
                        options: function() {
                            return {
                                header: 'Error',
                                question: 'An error occurred while performing this action. Reason: ' + response.data.message,
                                confirmation: true,
                                okText: 'Ok',
                                isCancelDisabled: true
                            };
                        }
                    }
                }
            );
        };
    }
})();

angular.module("eWorldES.GUI.InputModule").directive('editable', ['$timeout', function($timeout) {
    CKEDITOR.disableAutoInline = true;
return {
        restrict: 'A',
        scope: true,
        require: '?ngModel',
        link: function($scope, element, attr, ngModel) {

            $timeout(function () {
                var editor_id = element[0].id;

                    CKEDITOR.focusManager.blurDelay = 70;
                    var ck = CKEDITOR.replace(element[0], {
                        toolbar: [
                            { name: 'document', items: [ 'Source'] },
                            { name: 'clipboard', items: ['Undo', 'Redo' ] },
                            { name: 'insert', items: [ 'Table', 'HorizontalRule', 'SpecialChar'] },
                            { name: 'styles', items: [ 'Font', 'FontSize' ] },
                            { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
                            '/',
                            { name: 'styles', items: [ 'Styles', 'Format' ] },
                            { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
                            { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'] }

                        ]
                    });

                    if (!ngModel) return;
                    $scope.ckeditor = ck;

                    ck.on('key', function () {
                        $scope.$apply(function () {
                            ngModel.$setViewValue(CKEDITOR.instances[editor_id].getData());
                        });
                    });
                    ck.on('change', function () {
                        $timeout(function () {
                            $scope.$apply(function () {
                                ngModel.$setViewValue(CKEDITOR.instances[editor_id].getData());
                            });
                        }, 0);

                    });

                    ngModel.$render = function (value) {
                        ck.setData(ngModel.$viewValue);
                    };



            });

        }

    };
}]);
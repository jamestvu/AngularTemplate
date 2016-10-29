(function() {
    function FocusFirst($timeout) {
        return {
            restrict: "A",
            link: function(scope, element, attr) {
                element.find('input').focus();
            }
        };
    }
    angular
        .module("eWorldES.GUI.InputModule")
        .directive("focusFirst", ['$timeout', FocusFirst]);
})();
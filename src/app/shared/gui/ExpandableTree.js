(function() {
    function TreeDirective() {
        function TreeController($scope) {
            if (!$scope.childrenProperty) {
            }
            initializeAPI();
            initializeTree($scope.tree);
            var stateByNode = {};

            function initializeTree(tree) {
                stateByNode = {};
                stateByNode[$scope.getValue({node:tree})] = {};
                $scope.node = {
                    label: $scope.getLabel({node:tree}),
                    value: $scope.getValue({node:tree})
                };
                $scope.node[$scope.childrenProperty] = [tree];
            }

            $scope.initNodes = function(node, parent) {
                if (!node || !parent) {
                    return;
                }
                if (!stateByNode[$scope.getValue({node:parent})]) {
                    stateByNode[$scope.getValue({node:parent})] = {
                        $$hashKey: parent.$$hashKey
                    };
                }

                if (!stateByNode[$scope.getValue({node:node})]) {
                    stateByNode[$scope.getValue({node:node})] = {
                        $$hashKey: node.$$hashKey,
                        collapsed : false,
                        parentState: stateByNode[$scope.getValue({node:parent})]
                    };
                }
            };
            $scope.isCollapsed = function(node) {
                if (!node) {
                    return true;
                }
                var nodeState = stateByNode[$scope.getValue({node:node})];
                if (nodeState) {
                    return nodeState.collapsed;
                }
            };

            $scope.isRoot = function(node) {
                return $scope.getValue({node:node}) === $scope.getValue({node:$scope.node});
            };
            $scope.isSelected = function(node) {
                return $scope.getValue({node:$scope.currentlySelected}) === $scope.getValue({node:node});
            };

            $scope.select = function(node) {
                $scope.currentlySelected = node;
                $scope.onSelect({node: node});
            };

            $scope.toggleCollapse = function(node) {
                var nodeState = stateByNode[$scope.getValue({node:node})];
                if (nodeState) {
                    nodeState.collapsed = !nodeState.collapsed ;
                }
                if (nodeState && nodeState.collapsed) {
                    $scope.onCollapse({node: node});
                }
                else if (nodeState && !nodeState.collapsed) {
                    $scope.onExpand({node: node});
                }
            };

            $scope.collapseAll = function() {
                angular.forEach(stateByNode, function(nodeState, index) {
                    stateByNode.collapsed = true;
                });
            };

            $scope.expand = function(node) {
                stateByNode[$scope.getValue({node:node})].collapsed = false;
            };

            function initializeAPI() {
                if (!$scope.api) {
                    return;
                }

                $scope.api.initializeTree = function(tree) {
                    initializeTree(tree);
                };

                $scope.api.select = function(node) {
                    $scope.select(node);
                };

                $scope.api.collapseAll = function() {
                    angular.forEach(stateByNode, function(nodeState, index) {
                        nodeState.collapsed = true;
                    });
                };

                $scope.api.expandAll = function() {
                    angular.forEach(stateByNode, function(nodeState, index) {
                        nodeState.collapsed = false;
                    });
                };

                $scope.api.collapse = function(node) {
                    if (node) {
                        stateByNode[$scope.getValue({node:node})].collapsed = true;
                    }
                };

                $scope.api.expand = function(node) {
                    if (node) {
                        stateByNode[$scope.getValue({node:node})].collapsed = false;
                    }
                };

                $scope.api.expandTo = function(node) {
                    var currentState = stateByNode[$scope.getValue({node:node})];
                    while (currentState) {
                        currentState = currentState.parentState;
                        if (currentState) {
                            currentState.collapsed = false;
                        }
                    }
                };
            }
        }
        return {
            restrict: 'A',
            scope: {
                tree: '=',
                api: '=',
                onExpand: '&',
                onCollapse: '&',
                onSelect: '&',
                leafIconClass: '@',
                expandIconClass: '@',
                collapseIconClass: '@',
                currentlySelected: '=',
                childrenProperty: '=',
                getLabel: '&',
                getValue: '&'
            },
            templateUrl: 'ExpandableTree.html',
            controller: ['$scope', TreeController]
        }
    }
    angular
        .module('com.jgefroh.WidgetModule', [])
        .directive('expandableTree', TreeDirective)
        .config(['$rootScopeProvider', function($rootScopeProvider) {
            $rootScopeProvider.digestTtl(30); //[JG]: The higher this is, the more you can nest before running into infdig - recommend not setting too high (THIS IS A HACK).
        }]);
})();
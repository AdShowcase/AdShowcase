(function () {
    angular.module("app.component")
        .directive("SearchBox", function () {
            return {
                templateUrl: "app/component/creativeDetails-form.html",
                controller: searchBoxCtrlFn
            }
        });

    function searchBoxCtrlFn($scope) {
        $scope.search = function (searchStr) {
            //$scope.$emit("search", { str: searchStr });
        }
    }
}());
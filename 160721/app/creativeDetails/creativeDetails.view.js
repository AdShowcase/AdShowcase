(function () {
    angular.module("app.creativeDetails")
        .directive("creativeDetails", function () {
            return {
                restrict: "AE",
                replace: true,
                scope: {
                    
                },
                template: "<div id='container'></div>",
                link: linkFn
            }

            function linkFn(scope, element, attrs) {
                
            }
        });
}());
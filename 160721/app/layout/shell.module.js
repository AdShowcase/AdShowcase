(function () {
    var name = "app.shell",
        requires = ["ngRoute"];

    angular.module(name, requires)
        .config(function ($routeProvider) {
            $routeProvider
                .when("/templateMenu", {
                    templateUrl: "app/templateMenu/templateMenu.html",
                    controller: "templateMenu"
                })
                .when("/creativesThumb/:id", {
                    templateUrl: "app/creativesThumb/creativesThumb.html",
                    controller: "creativesThumb"
                })
                .when("/creativeDetails/:id", {
                    templateUrl: "app/creativeDetails/creativeDetails.html",
                    controller: "creativeDetails"
                })
            .otherwise({
                redirectTo: "/templateMenu"
            })
        })
})();
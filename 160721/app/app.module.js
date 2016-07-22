(function () {
    var name = "app",
        requires = [
            "app.shell",
            "app.templateMenu",
            "app.creativesThumb",
            "app.creativeDetails",
            "app.component",
            "app.data"
        ];

    angular.module(name, requires)
        .run(['$route', function ($route) {
            $route.reload();
        }]);
})();
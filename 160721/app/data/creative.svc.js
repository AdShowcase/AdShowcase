(function () {
    angular.module("app.data")
        .factory("creativeSvc", function ($http, $q) {
            return {
                //find: findById,
                
            }

            function findById(id) {
                var url = "http://..q=" + id;

                var defer = $q.defer();

                $http.get(url)
                    .success(function (response) {
                        defer.resolve(response);
                    })
                    .error(function (err) {
                        defer.reject(err);
                    })

                return defer.promise;
            }

        });
}());
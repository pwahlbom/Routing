var Routing;
(function (Routing) {
    angular.module("Routing", ["ui.router"])
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state('Home', {
            url: "/",
            templateUrl: "ngApp/views/home.html",
            controller: Router.Controllers.HomeController,
            controllerAs: "controller"
        })
            .state('About', {
            url: "/",
            templateUrl: "ngApp/views/about.html",
            controller: Router.Controllers.AboutController,
            controllerAs: "controller"
        });
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    });
})(Routing || (Routing = {}));
//# sourceMappingURL=app.js.map
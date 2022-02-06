namespace Routing {
    angular.module("Routing", ["ui.router"])
        .config(($stateProvider: ng.ui.IStateProvider,
            $locationProvider: ng.ILocationProvider,
            $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
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
                    })
                    $urlRouterProvider.otherwise("/");
                    $locationProvider.html5Mode(true);
        })
}
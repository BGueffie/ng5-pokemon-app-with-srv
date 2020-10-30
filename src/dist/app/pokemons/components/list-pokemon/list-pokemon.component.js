"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pokemons_service_1 = require("../../pokemons.service");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var login_service_1 = require("../../../login.service");
var ListPokemonComponent = /** @class */ (function () {
    function ListPokemonComponent(router, pokemonsService, titleService, loginService) {
        this.router = router;
        this.pokemonsService = pokemonsService;
        this.titleService = titleService;
        this.loginService = loginService;
    }
    ListPokemonComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("List of pokemons");
        this.pokemonsList$ = this.pokemonsService.getPokemons();
    };
    ListPokemonComponent.prototype.selectPokemon = function (pokemon) {
        console.log("Vous avez cliquez sur " + pokemon.name);
        var link = ['/pokemon', pokemon._id];
        this.router.navigate(link);
    };
    ListPokemonComponent.prototype.goToAdd = function () {
        console.log("Vous allez être redirigé vers la page d'ajout de pokemon");
        this.router.navigate(['/pokemon/add']);
    };
    ListPokemonComponent.prototype.logout = function () {
        var _this = this;
        this.loginService
            .logout()
            .subscribe(function (data) {
            _this.router.navigate(['/pokemon/all']);
        }, function (err) { return console.error(err); });
    };
    ListPokemonComponent.prototype.goLogin = function () {
        this.router.navigate(['/login']);
    };
    ListPokemonComponent = __decorate([
        core_1.Component({
            selector: 'list-pokemon',
            templateUrl: "./app/pokemons/components/list-pokemon/list-pokemon.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router,
            pokemons_service_1.PokemonsService,
            platform_browser_1.Title,
            login_service_1.LoginService])
    ], ListPokemonComponent);
    return ListPokemonComponent;
}());
exports.ListPokemonComponent = ListPokemonComponent;
//# sourceMappingURL=list-pokemon.component.js.map
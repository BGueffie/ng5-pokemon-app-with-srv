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
var router_1 = require("@angular/router");
var pokemons_service_1 = require("../../pokemons.service");
var platform_browser_1 = require("@angular/platform-browser");
var login_service_1 = require("../../../login.service");
var DetailPokemonComponent = /** @class */ (function () {
    function DetailPokemonComponent(route, router, pokemonsService, titleService, loginService) {
        this.route = route;
        this.router = router;
        this.pokemonsService = pokemonsService;
        this.titleService = titleService;
        this.loginService = loginService;
        this.pokemon = null;
    }
    DetailPokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Detail Pokemon");
        var id = this.route.snapshot.paramMap.get('id');
        this.pokemonsService.getPokemon(id)
            .subscribe(function (pokemon) { return _this.pokemon = pokemon; });
    };
    DetailPokemonComponent.prototype.goBack = function () {
        this.router.navigate(['/pokemon/all']);
    };
    DetailPokemonComponent.prototype.goEdit = function (pokemon) {
        var link = ['/pokemon/edit', pokemon._id];
        this.router.navigate(link);
    };
    DetailPokemonComponent.prototype.delete = function (pokemon) {
        var _this = this;
        this.pokemonsService.deletePokemon(pokemon._id)
            .subscribe(function (_) { return _this.goBack(); });
    };
    DetailPokemonComponent = __decorate([
        core_1.Component({
            selector: 'detail-pokemon',
            templateUrl: './app/pokemons/components/detail-pokemon/detail-pokemon.component.html',
            styleUrls: ['./app/pokemons/components/detail-pokemon/detail-pokemon.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            pokemons_service_1.PokemonsService,
            platform_browser_1.Title,
            login_service_1.LoginService])
    ], DetailPokemonComponent);
    return DetailPokemonComponent;
}());
exports.DetailPokemonComponent = DetailPokemonComponent;
//# sourceMappingURL=detail-pokemon.component.js.map
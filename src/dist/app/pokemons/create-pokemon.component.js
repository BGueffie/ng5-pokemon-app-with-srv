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
var pokemons_service_1 = require("./pokemons.service");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var login_service_1 = require("../login.service");
var CreatePokemonComponent = /** @class */ (function () {
    function CreatePokemonComponent(pokemonsService, titleService, router, loginService) {
        this.pokemonsService = pokemonsService;
        this.titleService = titleService;
        this.router = router;
        this.loginService = loginService;
        this.pokemonTypes = [null];
    }
    CreatePokemonComponent.prototype.ngOnInit = function () {
        if (!this.loginService.isAuthenticated) {
            this.router.navigate(['/login']);
        }
        this.titleService.setTitle("Create Pokemon");
        this.types = this.pokemonsService.getPokemonTypes();
    };
    CreatePokemonComponent.prototype.onSubmit = function () {
        var _this = this;
        this.pokemonsService.createPokemon({
            name: this.pokemonName,
            cp: this.pokemonCp,
            hp: this.pokemonHp,
            types: this.pokemonTypes,
            pokemonId: this.idOfPokemon,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + this.transformPokemonId() + ".png"
        })
            .subscribe(function (data) { return _this.handleSucess(data); }, function (error) { return _this.handleError(error); });
    };
    CreatePokemonComponent.prototype.handleSucess = function (data) {
        this.pokemonsService.dispatchPokemonCreated(data._id);
        console.log('OK pokemon created', data);
        this.goBack();
    };
    CreatePokemonComponent.prototype.handleError = function (error) {
        console.error('KO pokemon not created', error);
    };
    // Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
    CreatePokemonComponent.prototype.hasType = function (type) {
        var index = this.pokemonTypes.indexOf(type);
        if (index > -1)
            return true;
        return false;
    };
    // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
    CreatePokemonComponent.prototype.selectType = function ($event, type) {
        var checked = $event.target.checked;
        if (checked) {
            this.pokemonTypes.push(type);
        }
        else {
            var index = this.pokemonTypes.indexOf(type);
            if (index > -1) {
                this.pokemonTypes.splice(index, 1);
            }
        }
    };
    // Valide le nombre de types pour chaque pokémon
    CreatePokemonComponent.prototype.isTypesValid = function (type) {
        if (this.pokemonTypes[0] == null) {
            this.pokemonTypes.shift();
        }
        if (this.pokemonTypes.length === 1 && this.hasType(type)) {
            return false;
        }
        if (this.pokemonTypes.length >= 2 && !this.hasType(type)) {
            return false;
        }
        return true;
    };
    CreatePokemonComponent.prototype.outOfPokedex = function () {
        return (this.idOfPokemon > 893 || this.idOfPokemon < 1);
    };
    CreatePokemonComponent.prototype.goBack = function () {
        var link = ['/pokemon/all'];
        this.router.navigate(link);
    };
    CreatePokemonComponent.prototype.transformPokemonId = function () {
        if (this.idOfPokemon < 9) {
            return "00" + this.idOfPokemon;
        }
        if (this.idOfPokemon < 99) {
            return "0" + this.idOfPokemon;
        }
        return "" + this.idOfPokemon;
    };
    CreatePokemonComponent = __decorate([
        core_1.Component({
            selector: 'create-pokemon',
            templateUrl: './app/pokemons/create-pokemon.component.html'
        }),
        __metadata("design:paramtypes", [pokemons_service_1.PokemonsService,
            platform_browser_1.Title,
            router_1.Router,
            login_service_1.LoginService])
    ], CreatePokemonComponent);
    return CreatePokemonComponent;
}());
exports.CreatePokemonComponent = CreatePokemonComponent;
//# sourceMappingURL=create-pokemon.component.js.map
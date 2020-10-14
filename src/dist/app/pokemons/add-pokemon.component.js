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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var mock_pokemons_1 = require("./mock-pokemons");
var pokemon_1 = require("./pokemon");
var pokemons_service_1 = require("./pokemons.service");
var AddPokemonComponent = /** @class */ (function () {
    function AddPokemonComponent(pokemonsService, router, titleService) {
        this.pokemonsService = pokemonsService;
        this.router = router;
        this.titleService = titleService;
        this.pokemonTypes = [null];
    }
    AddPokemonComponent.prototype.ngOnInit = function () {
        // Initialisation de la propriété types
        this.titleService.setTitle("Add Pokemon");
        this.types = this.pokemonsService.getPokemonTypes();
    };
    // Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
    AddPokemonComponent.prototype.hasType = function (type) {
        var index = this.pokemonTypes.indexOf(type);
        if (index > -1)
            return true;
        return false;
    };
    // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
    AddPokemonComponent.prototype.selectType = function ($event, type) {
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
    AddPokemonComponent.prototype.isTypesValid = function (type) {
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
    AddPokemonComponent.prototype.transformNumberInPokedex = function () {
        if (this.numberInPokedex < 9) {
            return "00" + this.numberInPokedex;
        }
        if (this.numberInPokedex < 99) {
            return "0" + this.numberInPokedex;
        }
        return "" + this.numberInPokedex;
    };
    // La méthode appelée lorsque le formulaire est soumis.
    AddPokemonComponent.prototype.onSubmit = function () {
        console.log("Submit form !");
        this.addPokemonToList(this.pokemonHp, this.pokemonCp, this.pokemonName, "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + this.transformNumberInPokedex() + ".png", this.pokemonTypes);
        this.goBack();
    };
    AddPokemonComponent.prototype.goBack = function () {
        this.router.navigate(['/pokemon/all']);
    };
    AddPokemonComponent.prototype.addPokemonToList = function (hpCustom, cpCustom, nameCustom, pictureCustom, typesCustom) {
        mock_pokemons_1.POKEMONS.push({ id: this.numberInPokedex, cp: cpCustom, hp: hpCustom,
            name: nameCustom, types: typesCustom, picture: pictureCustom, created: new Date() });
        mock_pokemons_1.POKEMONS.sort(this.pokemonsService.compare);
    };
    AddPokemonComponent.prototype.outOfPokedex = function () {
        return (this.numberInPokedex > 893 || this.numberInPokedex < 1);
    };
    AddPokemonComponent.prototype.pokemonExists = function () {
        for (var _i = 0, POKEMONS_1 = mock_pokemons_1.POKEMONS; _i < POKEMONS_1.length; _i++) {
            var pokemon = POKEMONS_1[_i];
            if (pokemon.id === this.numberInPokedex) {
                return true;
            }
        }
        return false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", pokemon_1.Pokemon)
    ], AddPokemonComponent.prototype, "pokemon", void 0);
    AddPokemonComponent = __decorate([
        core_1.Component({
            selector: 'add-pokemon',
            templateUrl: './app/pokemons/add-pokemon.component.html',
            styleUrls: ['./app/pokemons/pokemon-form.component.css']
        }),
        __metadata("design:paramtypes", [pokemons_service_1.PokemonsService,
            router_1.Router,
            platform_browser_1.Title])
    ], AddPokemonComponent);
    return AddPokemonComponent;
}());
exports.AddPokemonComponent = AddPokemonComponent;
//# sourceMappingURL=add-pokemon.component.js.map
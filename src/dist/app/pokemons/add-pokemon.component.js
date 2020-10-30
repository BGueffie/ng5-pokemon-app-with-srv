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
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var pokemons_service_1 = require("./pokemons.service");
var AddPokemonComponent = /** @class */ (function () {
    function AddPokemonComponent(fb, pokemonsService, router, titleService) {
        this.fb = fb;
        this.pokemonsService = pokemonsService;
        this.router = router;
        this.titleService = titleService;
    }
    AddPokemonComponent.prototype.createForm = function () {
        this.creationForm = this.fb.group({
            pokemonId: '',
            name: '',
            hp: '',
            cp: '',
            picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + this.transformNumberInPokedex() + '.png',
            types: ''
        });
    };
    AddPokemonComponent.prototype.ngOnInit = function () {
        // Initialisation de la propriété types
        this.titleService.setTitle("Add Pokemon");
        this.createForm();
    };
    // Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
    AddPokemonComponent.prototype.hasType = function (type) {
        var index = this.pokemon.types.indexOf(type);
        if (index > -1)
            return true;
        return false;
    };
    // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
    AddPokemonComponent.prototype.selectType = function ($event, type) {
        var checked = $event.target.checked;
        if (checked) {
            this.pokemon.types.push(type);
        }
        else {
            var index = this.pokemon.types.indexOf(type);
            if (index > -1) {
                this.pokemon.types.splice(index, 1);
            }
        }
    };
    // Valide le nombre de types pour chaque pokémon
    AddPokemonComponent.prototype.isTypesValid = function (type) {
        if (this.pokemon.types[0] == null) {
            this.pokemon.types.shift();
        }
        if (this.pokemon.types.length === 1 && this.hasType(type)) {
            return false;
        }
        if (this.pokemon.types.length >= 2 && !this.hasType(type)) {
            return false;
        }
        return true;
    };
    AddPokemonComponent.prototype.transformNumberInPokedex = function () {
        if (this.pokemon.pokemonId < 9) {
            return "00" + this.pokemon.pokemonId;
        }
        else if (this.pokemon.pokemonId < 99) {
            return "0" + this.pokemon.pokemonId;
        }
        else {
            return "" + this.pokemon.pokemonId;
        }
    };
    // La méthode appelée lorsque le formulaire est soumis.
    AddPokemonComponent.prototype.createPokemon = function (formDirective) {
        var _this = this;
        if (this.creationForm.valid) {
            console.log(this.creationForm.value);
            this.pokemonsService
                .createPokemon(this.creationForm.value)
                .subscribe(function (data) { return _this.handleSucess(data, formDirective); }, function (error) { return _this.handleError(error); });
        }
    };
    AddPokemonComponent.prototype.handleSucess = function (data, formDirective) {
        console.log('OK blog post created', data);
        this.creationForm.reset();
        formDirective.resetForm();
        this.pokemonsService.dispatchPokemonCreated(data._id);
    };
    AddPokemonComponent.prototype.handleError = function (error) {
        console.error('KO blog post not created', error);
    };
    AddPokemonComponent.prototype.goBack = function () {
        this.router.navigate(['/pokemon/all']);
    };
    AddPokemonComponent.prototype.outOfPokedex = function () {
        return (this.pokemon.pokemonId > 893 || this.pokemon.pokemonId < 1);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AddPokemonComponent.prototype, "pokemon", void 0);
    AddPokemonComponent = __decorate([
        core_1.Component({
            selector: 'add-pokemon',
            templateUrl: './app/pokemons/add-pokemon.component.html',
            styleUrls: ['./app/pokemons/pokemon-form.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            pokemons_service_1.PokemonsService,
            router_1.Router,
            platform_browser_1.Title])
    ], AddPokemonComponent);
    return AddPokemonComponent;
}());
exports.AddPokemonComponent = AddPokemonComponent;
//# sourceMappingURL=add-pokemon.component.js.map
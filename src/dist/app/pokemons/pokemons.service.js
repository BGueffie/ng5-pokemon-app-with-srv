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
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var PokemonsService = /** @class */ (function () {
    function PokemonsService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://localhost:3100/api/v1/';
        this.pokemonCreated = new rxjs_1.Subject();
    }
    PokemonsService.prototype.deletePokemon = function (id) {
        return this.httpClient.delete(this.baseUrl + "pokemons/" + id);
    };
    /*
    searchPokemons(term : string): Observable<Pokemon[]> {
      if(!term.trim()){
        return of([]);
      }

      return this.httpClient.get<Pokemon[]>(`${this.baseUrl}/?name=${term}`).pipe(
        tap(_ => this.log(`found pokemons matching ${term}`)),
        catchError(this.handleError<Pokemon[]>('searchPokemons', []))
      )
    }*/
    PokemonsService.prototype.dispatchPokemonCreated = function (id) {
        this.pokemonCreated.next(id);
    };
    PokemonsService.prototype.updatePokemon = function (id, pokemon) {
        return this.httpClient.put(this.baseUrl + "pokemons/" + id, pokemon);
    };
    // Retourne tous les pokémons
    PokemonsService.prototype.getPokemons = function () {
        return this.httpClient.get(this.baseUrl + "pokemons");
    };
    // Retourne le pokémon avec l'identifiant passé en paramètre
    PokemonsService.prototype.getPokemon = function (id) {
        return this.httpClient.get(this.baseUrl + "pokemons/" + id);
    };
    PokemonsService.prototype.getPokemonTypes = function () {
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Psy', 'Combat', 'Dragon', 'Acier', 'Sol',
            'Ténèbres', 'Glace'];
    };
    PokemonsService.prototype.createPokemon = function (pokemon) {
        return this.httpClient.post(this.baseUrl + "pokemons", pokemon);
    };
    PokemonsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PokemonsService);
    return PokemonsService;
}());
exports.PokemonsService = PokemonsService;
//# sourceMappingURL=pokemons.service.js.map
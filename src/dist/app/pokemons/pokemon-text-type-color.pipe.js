"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
*/
var PokemonTextTypeColorPipe = /** @class */ (function () {
    function PokemonTextTypeColorPipe() {
    }
    PokemonTextTypeColorPipe.prototype.transform = function (type) {
        var color;
        switch (type) {
            case 'Feu':
                color = 'white';
                break;
            case 'Eau':
                color = 'black';
                break;
            case 'Plante':
                color = 'white';
                break;
            case 'Insecte':
                color = 'white';
                break;
            case 'Normal':
                color = 'black';
                break;
            case 'Vol':
                color = 'black';
                break;
            case 'Poison':
                color = 'white';
                break;
            case 'Fée':
                color = 'black';
                break;
            case 'Psy':
                color = 'white';
                break;
            case 'Electrik':
                color = 'black';
                break;
            case 'Combat':
                color = 'black';
                break;
            case 'Dragon':
                color = 'black';
                break;
            case 'Acier':
                color = 'black';
                break;
            case 'Sol':
                color = 'white';
                break;
            case 'Ténèbres':
                color = 'white';
                break;
            case 'Glace':
                color = 'black';
                break;
            default:
                color = 'grey';
                break;
        }
        return color;
    };
    PokemonTextTypeColorPipe = __decorate([
        core_1.Pipe({ name: 'pokemonTextTypeColor' })
    ], PokemonTextTypeColorPipe);
    return PokemonTextTypeColorPipe;
}());
exports.PokemonTextTypeColorPipe = PokemonTextTypeColorPipe;
//# sourceMappingURL=pokemon-text-type-color.pipe.js.map
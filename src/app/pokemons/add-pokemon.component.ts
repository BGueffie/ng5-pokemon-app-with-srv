import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component({
    selector: 'add-pokemon',
    templateUrl: './app/pokemons/add-pokemon.component.html',
    styleUrls: ['./app/pokemons/pokemon-form.component.css']
})

export class AddPokemonComponent implements OnInit {
    
    @Input() pokemon: Pokemon; // propriété d'entrée du composant
    types: Array<string>; // types disponibles pour un pokémon : 'Eau', 'Feu', etc ...
    pokemonName : string;
    pokemonTypes : Array<string> = [null];
    numberInPokedex : number;

    pokemonHp : number;
    pokemonCp : number;
    constructor(
        private pokemonsService: PokemonsService,
        private router: Router,
        private titleService : Title) { }
  
    ngOnInit() {
        // Initialisation de la propriété types
        this.titleService.setTitle("Add Pokemon")
        this.types = this.pokemonsService.getPokemonTypes();
    }
  
    // Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
    hasType(type: string): boolean {
        let index = this.pokemonTypes.indexOf(type);
        if (index > -1) return true;
        return false;
    }
  
    // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
    selectType($event: any, type: string): void {
        let checked = $event.target.checked;
        if (checked) {
            this.pokemonTypes.push(type);
        } else {
            let index = this.pokemonTypes.indexOf(type);
            if (index > -1) {
                this.pokemonTypes.splice(index, 1);
            }
        }
    }
  
    // Valide le nombre de types pour chaque pokémon
    isTypesValid(type: string): boolean {
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
    }
  
    transformNumberInPokedex(): string {
        if (this.numberInPokedex < 9) {
            return "00" + this.numberInPokedex;
        }
        if(this.numberInPokedex < 99 ) {
            return "0" + this.numberInPokedex;
        }
        return "" + this.numberInPokedex;
    }


    // La méthode appelée lorsque le formulaire est soumis.
    onSubmit(): void {
        console.log("Submit form !");
        this.addPokemonToList(this.pokemonHp,this.pokemonCp,this.pokemonName,"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+ this.transformNumberInPokedex() +".png",this.pokemonTypes);
        this.goBack();
    }

    goBack(): void {
        this.router.navigate(['/pokemon/all']);
    }

    addPokemonToList(hpCustom : number, cpCustom : number, nameCustom : string, pictureCustom : string, typesCustom : Array<string>  ): void {
        POKEMONS.push({ id : this.numberInPokedex , cp : cpCustom, hp : hpCustom,
                       name : nameCustom, types : typesCustom, picture : pictureCustom, created : new Date() });
        POKEMONS.sort(this.pokemonsService.compare);
  
      }
    
    outOfPokedex(){
        return (this.numberInPokedex > 893 || this.numberInPokedex < 1);
    }

    pokemonExists(){
        for(let pokemon of POKEMONS){
            if(pokemon.id === this.numberInPokedex){
                return true;
            }
        }
        return false;
    }
}
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { POKEMONS } from './mock-pokemons';
  
@Component({
  selector: 'list-pokemon',
  templateUrl: `./app/pokemons/list-pokemon.component.html`,
})
export class ListPokemonComponent implements OnInit { 

    private pokemons: Pokemon[];
    
    constructor(
         private router : Router,
         private pokemonsService: PokemonsService,
         private titleService : Title) { }

    getPokemons(): void {
        this.pokemonsService.getPokemons()
        .subscribe(pokemons => this.pokemons = pokemons);
    }

    ngOnInit() {
        POKEMONS.sort(this.pokemonsService.compare);
        this.titleService.setTitle("List of Pokemons");
        this.pokemonsService.getPokemons()
        .subscribe(pokemons => this.pokemons = pokemons); 
    }

    
    selectPokemon(pokemon : Pokemon) {
        console.log("Vous avez cliquez sur " + pokemon.name);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }

    
    
    goToAdd() {
        console.log("Vous allez être redirigé vers la page d'ajout de pokemon");
        this.router.navigate(['/pokemon/add']);
    }
}
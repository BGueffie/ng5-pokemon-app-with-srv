import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from '../../models/pokemon';
import { PokemonsService } from '../../pokemons.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LoginService } from '../../../login.service';
import { Observable } from 'rxjs';
  
@Component({
  selector: 'list-pokemon',
  templateUrl: `./app/pokemons/components/list-pokemon/list-pokemon.component.html`
})
export class ListPokemonComponent implements OnInit { 

    pokemonsList$ : Observable<Pokemon[]>;
    
    constructor(
         private router : Router,
         private pokemonsService: PokemonsService,
         private titleService : Title,
         private loginService : LoginService) { }

    ngOnInit() {
        this.titleService.setTitle("List of pokemons");
        this.pokemonsList$ = this.pokemonsService.getPokemons();
        
    }

    
    selectPokemon(pokemon : Pokemon) {
        console.log("Vous avez cliquez sur " + pokemon.name);
        let link = ['/pokemon', pokemon._id];
        this.router.navigate(link);
    }
    
    goToAdd() {
        console.log("Vous allez être redirigé vers la page d'ajout de pokemon");
        this.router.navigate(['/pokemon/add']);
    }
    logout() {
        this.loginService
            .logout()
            .subscribe(data => {
                this.router.navigate(['/pokemon/all'])
            }, err => console.error(err))
        
    }
    goLogin() {
        this.router.navigate(['/login']);
    }

    goRegister() {
        this.router.navigate(['/register']);
    }
}
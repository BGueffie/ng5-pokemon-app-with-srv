import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from '../../models/pokemon';    
import { PokemonsService} from '../../pokemons.service';
import { Title } from '@angular/platform-browser';
import { LoginService } from '../../../login.service';
  
@Component({
    selector: 'detail-pokemon',
    templateUrl: './app/pokemons/components/detail-pokemon/detail-pokemon.component.html',
    styleUrls: ['./app/pokemons/components/detail-pokemon/detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {
  
    pokemon: Pokemon = null; 
  
    constructor(
         private route: ActivatedRoute,
         private router: Router,
         private pokemonsService : PokemonsService,
         private titleService : Title,
         private loginService : LoginService
         ) {}
  
    ngOnInit(): void {
        this.titleService.setTitle("Detail Pokemon");
        let id = this.route.snapshot.paramMap.get('id');
        this.pokemonsService.getPokemon(id)
        .subscribe(pokemon => this.pokemon = pokemon); 
   }
    
  
    goBack(): void {
        this.router.navigate(['/pokemon/all']);
    }
    goEdit(pokemon : Pokemon) : void {
        let link = ['/pokemon/edit', pokemon._id];
        this.router.navigate(link);
    }

    delete(pokemon: Pokemon): void {
        this.pokemonsService.deletePokemon(pokemon._id)
        .subscribe(_ => this.goBack());

    }
}
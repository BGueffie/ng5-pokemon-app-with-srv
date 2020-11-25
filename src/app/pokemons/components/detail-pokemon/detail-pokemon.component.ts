import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from '../../models/pokemon';    
import { PokemonsService} from '../../pokemons.service';
import { Title } from '@angular/platform-browser';
import { LoginService } from '../../../login.service';
  
@Component({
    selector: 'detail-pokemon',
    templateUrl: './detail-pokemon.component.html',
    styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {
  
    pokemon: Pokemon = null; 
  
    constructor(
         public route: ActivatedRoute,
         public router: Router,
         public pokemonsService : PokemonsService,
         public titleService : Title,
         public loginService : LoginService
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
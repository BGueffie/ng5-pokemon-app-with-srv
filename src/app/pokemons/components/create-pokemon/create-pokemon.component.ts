import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonsService } from '../../pokemons.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from '../../../login.service';


@Component({
    selector: 'create-pokemon',
    templateUrl: './app/pokemons/components/create-pokemon/create-pokemon.component.html'
})

export class CreatePokemonComponent implements OnInit {
    pokemonName : string;
    pokemonTypes : [String] = [null];
    idOfPokemon : number;

    pokemonHp : number;
    pokemonCp : number;
    types: Array<string>;
    constructor(
        private pokemonsService: PokemonsService, 
        private titleService : Title,
        private router: Router,
        private loginService: LoginService) { }

    ngOnInit() { 
        if(!this.loginService.isAuthenticated){
            this.router.navigate(['/login']);
        }
        this.titleService.setTitle("Create Pokemon")
        this.types = this.pokemonsService.getPokemonTypes();
    }

    onSubmit() {
        this.pokemonsService.createPokemon({
            name: this.pokemonName,
            cp: this.pokemonCp,
            hp: this.pokemonHp,
            types: this.pokemonTypes,
            pokemonId: this.idOfPokemon,
            picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + this.transformPokemonId() + ".png"
        })
            .subscribe(data => this.handleSucess(data), error => this.handleError(error));
    }

    handleSucess(data: Pokemon) {
        this.pokemonsService.dispatchPokemonCreated(data._id);
        console.log('OK pokemon created', data);
        this.goBack();
    }

    handleError(error: any) {
        console.error('KO pokemon not created', error);
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

    outOfPokedex(){
        return (this.idOfPokemon > 893 || this.idOfPokemon < 1);
    }

    goBack(): void {
        let link = ['/pokemon/all'];
        this.router.navigate(link);
    }

    transformPokemonId(): string {
        if (this.idOfPokemon < 9) {
            return "00" + this.idOfPokemon;
        }
        if(this.idOfPokemon < 99 ) {
            return "0" + this.idOfPokemon;
        }
        return "" + this.idOfPokemon;
    }



}
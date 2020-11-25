import { Injectable } from '@angular/core';
import { Pokemon } from './models/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
  
@Injectable()
export class PokemonsService {

    baseUrl = environment.apiUrl + 'api/v1/';
    private pokemonCreated =  new Subject<string>();
    constructor(private httpClient: HttpClient) { }

    deletePokemon(id: string) {
      return this.httpClient.delete(`${this.baseUrl}pokemons/${id}`);
    }
  
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
  
    dispatchPokemonCreated(id: string) {
      this.pokemonCreated.next(id);
    }


    updatePokemon(id: String, pokemon : Pokemon) {
      return this.httpClient.put(`${this.baseUrl}pokemons/${id}`,pokemon);
    }
    
    // Retourne tous les pokémons
    getPokemons(): Observable<Pokemon[]> {
      return this.httpClient.get<Pokemon[]>(`${this.baseUrl}pokemons`);
    }
    
    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: string): Observable<Pokemon> {

      
      return this.httpClient.get<Pokemon>(`${this.baseUrl}pokemons/${id}`);
    }
    getPokemonTypes(): string[] {
      return ['Plante', 'Feu' ,'Eau' ,'Insecte' ,'Normal' ,'Electrik' ,'Poison' ,'Fée' ,'Vol','Psy','Combat','Dragon','Acier','Sol',
              'Ténèbres','Glace'] 
    }

    createPokemon(pokemon: Pokemon) {
      return this.httpClient.post<Pokemon>(`${this.baseUrl}pokemons`, pokemon);
    }
    

}
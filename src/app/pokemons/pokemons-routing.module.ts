import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  
import { ListPokemonComponent }    from './components/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent }  from './components/detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';
import { CreatePokemonComponent } from './components/create-pokemon/create-pokemon.component';
  
// les routes du module Pokémon
const pokemonsRoutes: Routes = [
    {
        path: 'pokemon',
        children: [
            { path: 'all', component: ListPokemonComponent },
            { path: 'add', component: CreatePokemonComponent},
            { path: 'edit/:id', component: EditPokemonComponent },
            { path: ':id', component: DetailPokemonComponent }
            
        ]
    }
   
];
  
@NgModule({
    imports: [
        RouterModule.forChild(pokemonsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule { }
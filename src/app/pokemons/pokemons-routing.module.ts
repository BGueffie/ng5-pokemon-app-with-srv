import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  
import { ListPokemonComponent }    from './list-pokemon.component';
import { DetailPokemonComponent }  from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { CreatePokemonComponent } from './create-pokemon.component';
  
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
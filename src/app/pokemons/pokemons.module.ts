import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';
import { PokemonFormComponent } from './components/edit-pokemon/pokemon-form.component';
  
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { PokemonsService } from './pokemons.service';
import { LoaderComponent } from '../loader.component';
import { CreatePokemonComponent } from './components/create-pokemon/create-pokemon.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PokemonRoutingModule
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        EditPokemonComponent,
        PokemonFormComponent,
        CreatePokemonComponent,
        LoaderComponent,
        BorderCardDirective,
        PokemonTypeColorPipe
        
    ],
    providers: [PokemonsService]
})
export class PokemonsModule { }
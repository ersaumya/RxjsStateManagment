import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsFavoritesComponent } from './components/songs-favorites/songs-favorites.component';
import { SongsListenedComponent } from './components/songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';



@NgModule({
  declarations: [SongsFavoritesComponent, SongsListenedComponent, SongsPlaylistComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SongsFavoritesComponent, SongsListenedComponent, SongsPlaylistComponent
  ]
})
export class SongsModule { }

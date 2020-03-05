import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsFavoritesComponent } from './components/songs-favorites/songs-favorites.component';
import { SongsListenedComponent } from './components/songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';
import { SongsService } from './services/songs.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SongsFavoritesComponent, SongsListenedComponent, SongsPlaylistComponent],
  imports: [
    CommonModule,HttpClientModule
  ],
  exports:[
    SongsFavoritesComponent, SongsListenedComponent, SongsPlaylistComponent
  ],
  providers: [SongsService]
})
export class SongsModule { }

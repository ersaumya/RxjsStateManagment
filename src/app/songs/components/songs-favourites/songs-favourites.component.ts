import { Store } from './../../../store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SongsService } from '../../services/songs.service';
import { filter ,map, mapTo, tap} from 'rxjs/operators';

@Component({
  selector: 'songs-favorites',
  templateUrl: './songs-favourites.component.html',
  styleUrls: ['./songs-favourites.component.css']
})
export class SongsFavouritesComponent implements OnInit {

  favourites$:Observable<any[]>;

  constructor(private store: Store, private songService: SongsService) { }

  ngOnInit(){
    this.favourites$ = this.store.select<any>('playlist')
      .pipe(filter(Boolean),map(playlist => playlist.filter(track=> track.favourite)));
  }

  onToggle(event) {
    this.songService.toggle(event);
  }


}

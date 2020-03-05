import { SongsService } from './../../services/songs.service';
import { Store } from './../../../store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'songs-playlist',
  templateUrl: './songs-playlist.component.html',
  styleUrls: ['./songs-playlist.component.css']
})
export class SongsPlaylistComponent implements OnInit,OnDestroy {
  
  playlist$:Observable<any[]>;
  subscription:Subscription;

  constructor(private store:Store,private songService:SongsService) { }

  ngOnInit(): void {
    this.playlist$=this.store.select('playlist');
    this.subscription=this.songService.getPlaylist$.subscribe()
  }

  ngOnDestroy(): void {
     this.subscription.unsubscribe();
  }

}

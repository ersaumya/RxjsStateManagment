import { Store } from './../../store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Song } from '../models/songs.model';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private httpClient:HttpClient,private store:Store) { }

  getPlaylist$:Observable<Song[]>= this.httpClient.get<Song[]>('http://localhost:3000/playlist')
    .pipe(map(res => res),tap(next => this.store.set('playlist', next)));

    toggle(event:any){
      this.httpClient.put(`http://localhost:3000/playlist/${event.track.id}`,event.track)
      .pipe(map(res=>res))
      .subscribe((track:Song)=>{
        const value=this.store.value.playlist;
        const playlist=value.map((song:Song)=>{
          if(event.track.id===song.id){
            return {...song,...event.track};
          }else{
            return song;
          }
        });

        this.store.set('playlist',playlist);
        
      });
    }
}

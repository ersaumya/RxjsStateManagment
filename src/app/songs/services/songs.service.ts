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
}

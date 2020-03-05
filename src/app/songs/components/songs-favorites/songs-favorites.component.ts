import { Store } from './../../../store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'songs-favorites',
  templateUrl: './songs-favorites.component.html',
  styleUrls: ['./songs-favorites.component.css']
})
export class SongsFavoritesComponent implements OnInit {

  favorites$:Observable<any[]>;
  
  constructor(private store: Store, private songService: SongsService) { }

  ngOnInit(): void {
    this.favorites$=this.store.select('playlist');
  }

}

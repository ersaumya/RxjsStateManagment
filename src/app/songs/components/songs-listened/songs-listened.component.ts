import { Store } from './../../../store';
import { Component, OnInit } from '@angular/core';
import { SongsService } from '../../services/songs.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'songs-listened',
  templateUrl: './songs-listened.component.html',
  styleUrls: ['./songs-listened.component.css']
})
export class SongsListenedComponent implements OnInit {
  listened$: Observable<any[]>;

  constructor(private store: Store, private songService: SongsService) { }

  ngOnInit() {
    this.listened$=this.store.select<any>('playlist')
      .pipe(filter(Boolean), map(playlist => playlist.filter(track => track.listened)));
  }

  onToggle(event) {
    this.songService.toggle(event);
  }

}

import { Store } from './../../../store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'songs-favorites',
  templateUrl: './songs-favorites.component.html',
  styleUrls: ['./songs-favorites.component.css']
})
export class SongsFavoritesComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
  }

}

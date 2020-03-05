import { Store } from './../../../store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'songs-listened',
  templateUrl: './songs-listened.component.html',
  styleUrls: ['./songs-listened.component.css']
})
export class SongsListenedComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
  }

}

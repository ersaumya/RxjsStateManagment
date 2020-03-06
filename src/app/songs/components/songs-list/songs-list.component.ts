import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {

  @Input() list:any[];

  constructor() { }

  ngOnInit(): void {
  }

}

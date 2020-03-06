import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {

  @Input() list:any[];

  @Output() toggle=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleItem(index:number,prop:string){
    const track=this.list[index];
    this.toggle.emit({
      track:{...track,[prop]:!track[prop]}
    });
  }

}

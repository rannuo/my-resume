import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-viewer',
  templateUrl: './card-viewer.component.html',
  styleUrls: ['./card-viewer.component.css']
})
export class CardViewerComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './wke-document-view.component.html',
  styleUrls: ['./wke-document-view.component.css']
})
export class WkeDocumentViewComponent implements OnInit {
  displayVar = true;
  public color = 'some';
  constructor() { }

  ngOnInit() {
  }

}

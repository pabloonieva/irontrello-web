import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  listNames:Array<String> = ['To do', 'Working', 'Done'];
  constructor() { }

  ngOnInit() {
  }

}

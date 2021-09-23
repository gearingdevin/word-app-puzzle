import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Word Puzzle';

  constructor() { }

  ngOnInit(): void {
    //runs on component load
  }

  addWord() {
    console.log('toggle');
  }

}

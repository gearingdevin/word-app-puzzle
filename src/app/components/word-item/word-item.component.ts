import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Word } from 'src/app/Word';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-word-item',
  templateUrl: './word-item.component.html',
  styleUrls: ['./word-item.component.scss']
})
export class WordItemComponent implements OnInit {
  @Input() word: Word;
  @Output() onDeleteWord: EventEmitter<Word> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(action, obj) {
    switch (action) {
      case "Delete": {
        this.onDeleteWord.emit(obj);
      }
    }
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Word } from 'src/app/Word';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent implements OnInit {
  @Output() onAddWord: EventEmitter<Word> = new EventEmitter();
  value: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.value) {
      //maybe add log here
      return;
    }

    const newWord = {
      value: this.value.toLocaleUpperCase(),
      length: this.value.length
    }

    //emit
    this.onAddWord.emit(newWord);

    this.value = '';

  }
}

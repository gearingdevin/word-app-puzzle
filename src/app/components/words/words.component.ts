import { Component, OnInit } from '@angular/core';
import { Word } from 'src/app/Word';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {
  words: Word[] = [];

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.wordService
      .getWords()
      .subscribe((words) => this.words = words);
  }

  deleteWord(word: Word) {
    this.wordService
      .deleteWord(word)
      .subscribe(() => this.words = this.words.filter(w => w.id !== word.id));

  }

  async addWord(word: Word) {
    const added = (await this.wordService.addWord(word));

    if (added != null) {
      this.words.push(added)
    }
    else {
      alert("This is a duplicate word");
    }
  }

}

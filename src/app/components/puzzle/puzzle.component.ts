import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent implements OnInit {

  puzzle: string[] = [];

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    (async () => {
      this.puzzle = await this.wordService.getPuzzle();
    })();
  }
}

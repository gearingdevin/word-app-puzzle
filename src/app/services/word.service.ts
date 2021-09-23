import { Injectable } from '@angular/core';
import { Word } from 'src/app/Word';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { take } from 'rxjs/operators'
import { rejects } from 'assert';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private apiUrl = 'http://localhost:5000/words';


  constructor(private http: HttpClient) { }

  getWords(): Observable<Word[]> {
    return this.http.get<Word[]>(this.apiUrl);
  }

  deleteWord(word: Word): Observable<Word> {
    const url = `${this.apiUrl}/${word.id}`;
    return this.http.delete<Word>(url);
  }

  async addWord(word: Word): Promise<Word> {
    const canAddWord = (await this.canAdd(word));

    if (canAddWord) {
      console.log("Can Add 1");

      return ((this.http.post<Word>(this.apiUrl, word, httpOptions)).pipe(take(1)).toPromise());
    }
    else {
      console.log("Cannot Add 2");

      return null;
    }
  }

  async getPuzzle(): Promise<any> {

    const savedWords = await this.getWords().pipe(take(1)).toPromise();

    var pz = await this.generatePuzzle(savedWords);

    return null;
  }


  async canAdd(word: Word): Promise<boolean> {
    var canAdd = this.getWords().pipe(take(1))
      .toPromise()
      .then((result: Word[]) => {
        if (result.some(item => (item.value === word.value))) {
          console.log("Cannot Add");
          return false;
        }
        else {
          console.log("Cann Add");
          return true;
        }

      });

    return await canAdd;
  }



  async generatePuzzle(savedWords: Word[]): Promise<string[]> {
    let puzzleData: Array<string>;
    savedWords.sort((a, b) => (a.length > b.length) ? -1 : 1);
    var maxWordLength = savedWords[0].length;





    console.log(savedWords);
    console.log(maxWordLength);

    return puzzleData;
  }

}

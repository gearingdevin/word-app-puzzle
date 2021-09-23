import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { WordsComponent } from './components/words/words.component';
import { WordItemComponent } from './components/word-item/word-item.component';
import { AddWordComponent } from './components/add-word/add-word.component';
import { PuzzleComponent } from './components/puzzle/puzzle.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WordsComponent
  },
  {
    path: 'puzzle',
    component: PuzzleComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    WordsComponent,
    WordItemComponent,
    AddWordComponent,
    PuzzleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  awayScore,
  homeScore,
  resetScore,
  setScores,
} from './actions/score-board.actions';
import { IScoreBoardState } from './interfaces/score-board.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  scores$: Observable<IScoreBoardState>;

  constructor(private store: Store<{ game: IScoreBoardState }>) {
    this.scores$ = store.select('game');
  }

  increment(): void {
    this.store.dispatch(homeScore());
  }

  decrement(): void {
    this.store.dispatch(awayScore());
  }

  reset(): void {
    this.store.dispatch(resetScore());
  }

  setScore(): void {
    this.store.dispatch(setScores({ game: { home: 6, away: 3 } }));
  }
}

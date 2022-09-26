import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IScoreBoardState } from './interfaces/score-board.interface';

@Injectable({
  providedIn: 'root',
})
export class ScoreBoardService {
  constructor() {}

  getAll(): Observable<IScoreBoardState> {
    return of({ home: 10, away: 5 }).pipe(delay(3e3));
  }
}

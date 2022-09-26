import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { loadScores, setScores } from '../actions/score-board.actions';
import { ScoreBoardService } from '../score-board.service';

@Injectable()
export class ScoreBoardEffect {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadScores),
      mergeMap(() =>
        this.scoreBoardService.getAll().pipe(
          map((scores) => ({
            type: setScores.type,
            game: scores,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private scoreBoardService: ScoreBoardService
  ) {}
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ScoreBoardService } from '../score-board.service';

@Injectable()
export class ScoreBoardEffect {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Scoreboard Page] Load Scores'),
      mergeMap(() =>
        this.scoreBoardService.getAll().pipe(
          map((scores) => ({
            type: '[Scoreboard Page] Load Scores Success',
            payload: scores,
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

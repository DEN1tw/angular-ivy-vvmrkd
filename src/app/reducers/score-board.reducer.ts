import { createReducer, on } from '@ngrx/store';
import * as ScoreboardPageActions from '../actions/score-board.actions';
import { IScoreBoardState } from '../interfaces/score-board.interface';

export const INITIAL_STATE: IScoreBoardState = {
  home: 0,
  away: 0,
};

export const scoreboardReducer = createReducer(
  INITIAL_STATE,
  on(ScoreboardPageActions.homeScore, (state) => ({
    ...state,
    home: state.home + 1,
  })),
  on(ScoreboardPageActions.awayScore, (state) => ({
    ...state,
    away: state.away + 1,
  })),
  on(ScoreboardPageActions.resetScore, (state) => ({ home: 0, away: 0 })),
  on(ScoreboardPageActions.setScores, (state, { game }) => ({
    home: game.home,
    away: game.away,
  }))
);

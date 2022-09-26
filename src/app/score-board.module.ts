import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ScoreBoardEffect } from './effects/score-board.effect';
import {
  scoreboardFeatureKey,
  scoreboardReducer,
} from './reducers/score-board.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(scoreboardFeatureKey, scoreboardReducer),
    EffectsModule.forFeature([ScoreBoardEffect]),
  ],
})
export class ScoreboardModule {}

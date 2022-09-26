import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
  scoreboardFeatureKey,
  scoreboardReducer,
} from './reducers/score-board.reducer';

@NgModule({
  imports: [StoreModule.forFeature(scoreboardFeatureKey, scoreboardReducer)],
})
export class ScoreboardModule {}

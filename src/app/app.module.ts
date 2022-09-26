import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ScoreboardModule } from './score-board.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({}),
    ScoreboardModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

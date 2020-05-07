import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { XOService} from './services/xo.service';
import { MarkComponent } from './components/mark/mark.component';
import { BoardComponent } from './components/board/board.component';
import { BarComponent } from './components/bar/bar.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { RecentwinnersComponent } from './components/recentwinners/recentwinners.component';
import { PlayernamesComponent } from './components/playernames/playernames.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkComponent,
    BoardComponent,
    BarComponent,
    LeaderboardComponent,
    RecentwinnersComponent,
    PlayernamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [XOService],
  bootstrap: [AppComponent]
})
export class AppModule { }

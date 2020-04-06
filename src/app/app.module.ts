import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XOService} from './services/xo.service';
import { TileComponent } from './components/tile/tile.component';
import { BoardComponent } from './components/board/board.component';
import { BarComponent } from './components/bar/bar.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { RecentwinnersComponent } from './components/recentwinners/recentwinners.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    BoardComponent,
    BarComponent,
    LeaderboardComponent,
    RecentwinnersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [XOService],
  bootstrap: [AppComponent]
})
export class AppModule { }

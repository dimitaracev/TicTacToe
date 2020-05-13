import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { XOService} from './services/xo.service';
import { MarkComponent } from './components/mark/mark.component';
import { BoardComponent } from './components/board/board.component';
import { BarComponent } from './components/bar/bar.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { WinnersComponent } from './components/winners/winners.component';
import { PlayersComponent } from './components/players/players.component';
import { OpponentComponent } from './components/opponent/opponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkComponent,
    BoardComponent,
    BarComponent,
    LeaderboardComponent,
    WinnersComponent,
    PlayersComponent,
    OpponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [XOService],
  bootstrap: [AppComponent]
})
export class AppModule { }

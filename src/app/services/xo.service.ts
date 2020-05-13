import { Injectable } from '@angular/core';
import { Mark } from '../models/mark';
import { Player } from '../models/player';
import { Computer } from '../models/computer';
import { Win } from '../models/win';
import { Mode } from '../enums/mode.enum';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class XOService {
  public Players: Array<Player>;
  public Recent : Subject<Win>;
  public Mode: Mode;
  constructor() {
    this.Players = new Array<Player>();
    this.Recent = new Subject();
  }

  ResetScores(){
    for(let i = 0; i < this.Players.length; i++)
      this.Players[i].Score = 0;
  }
  OnWin(win)
  {
    this.Recent.next(win);
  }
  SetMode(mode: Mode) {
    this.Mode = mode;
    switch (this.Mode) {
      case Mode.AgainstPlayer:
        this.Players.push(new Player('Player 1'));
        this.Players.push(new Player('Player 2'));
        break;
      case Mode.AgainstComputer:
        this.Players.push(new Player('Player 1'));
        this.Players.push(new Computer());
        break;
      default:
        break;
    }
  }
}

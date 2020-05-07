import { Injectable } from '@angular/core';
import { Mark } from '../models/mark';
import { Player } from '../models/player';
import { Win } from '../models/win';

@Injectable({
  providedIn: 'root',
})
export class XOService {
  public Turn: Boolean = false;
  public Players: Array<Player>;
  public Marks: Array<Mark>;
  public RecentWinners : Array<Win>;
  constructor() {
    this.Marks = new Array<Mark>();
    this.Players = new Array<Player>();
    this.RecentWinners = new Array<Win>();
    this.Players.push(new Player('Player 1'));
    this.Players.push(new Player('Player 2'));
    for (let i = 0; i < 9; i++) {
      this.Marks.push(new Mark(i));
    }
  }
  private checkForWinner(): number {

    let winner = -1;
    let marks = [];

    // Check vertical
    for (let line = 0; line < 9; line += 3) {
      if (
        this.Marks[line].State == this.Marks[line + 1].State &&
        this.Marks[line + 1].State == this.Marks[line + 2].State &&
        this.Marks[line].State != -1
      ) {
        winner = this.Marks[line].State;
        marks.push(line);
        marks.push(line + 1);
        marks.push(line + 2);
        break;
      }
    }

    // Check horizontal
    for (let row = 0; row < 3; row += 1) {
      if (
        this.Marks[row].State == this.Marks[row + 3].State &&
        this.Marks[row + 3].State == this.Marks[row + 6].State &&
        this.Marks[row].State != -1
      ) {
        winner = this.Marks[row].State;
        marks.push(row);
        marks.push(row + 3);
        marks.push(row + 6);
        break;
      }
    }

    // Check diagonal l
    if (
      this.Marks[0].State == this.Marks[4].State &&
      this.Marks[4].State == this.Marks[8].State &&
      this.Marks[0].State != -1
    ) {
      winner = this.Marks[4].State;
      marks.push(0);
      marks.push(4);
      marks.push(8);
    }

    // Check diagonal r
    if (
      this.Marks[2].State == this.Marks[4].State &&
      this.Marks[4].State == this.Marks[6].State &&
      this.Marks[2].State != -1
    ) {
      winner = this.Marks[4].State;
      marks.push(2);
      marks.push(4);
      marks.push(6);
    }
    if (winner != -1) {
      this.Marks[marks[0]].SetIsWinnerMark(true);
      this.Marks[marks[1]].SetIsWinnerMark(true);
      this.Marks[marks[2]].SetIsWinnerMark(true);
      this.Players[winner].Score++;
      return winner;
    } else return undefined;
  }

  Click(i) {
    if (this.Marks[i].State == -1) {
      this.Marks[i].UpdateState(this.Turn ? 1 : 0);
      this.Turn = !this.Turn;
      let winner = this.checkForWinner();
      setTimeout(() => {
        if (winner != undefined) {
          this.RecentWinners.push(new Win(this.Players[winner].Name,  !this.Turn ? 'X' : 'O'));
          this.resetBoard();
        }
      }, 1000);
    }
    let boardFilled = 0;
    this.Marks.forEach((mark) => {
      if (mark.State == -1 || mark.State == -3) boardFilled += 1;
    });
    if (boardFilled == 0) {
      setTimeout(() => {
        this.resetBoard();
      }, 1000);
    }
  }
  resetBoard() {
    this.Marks.forEach((mark) => {
      mark.UpdateState(-1);
      mark.SetIsWinnerMark(false);
    });
    this.Turn = false;
  }
}

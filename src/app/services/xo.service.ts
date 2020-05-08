import { Injectable } from '@angular/core';
import { Mark } from '../models/mark';
import { Player } from '../models/player';
import { Win } from '../models/win';
import { Mode } from '../enums/mode.enum';

@Injectable({
  providedIn: 'root',
})
export class XOService {
  public Turn: Boolean;
  public Players: Array<Player>;
  public Marks: Array<Mark>;
  public RecentWinners: Array<Win>;
  public Mode: Mode;
  public CurrentGameMarks: number;
  constructor() {
    this.Marks = new Array<Mark>();
    this.Players = new Array<Player>();
    this.RecentWinners = new Array<Win>();
    for (let i = 0; i < 9; i++) {
      this.Marks.push(new Mark(i));
    }
    this.CurrentGameMarks = 0;
    this.Turn = false;
  }
  private checkForWinner(): boolean {
    let foundWinner = false;
    let marks = [];

    // Check vertical
    for (let line = 0; line < 9; line += 3) {
      if (
        this.Marks[line + 0].State == this.Marks[line + 1].State &&
        this.Marks[line + 1].State == this.Marks[line + 2].State &&
        this.Marks[line].State != -1
      ) {
        foundWinner = true;
        marks.push(line);
        marks.push(line + 1);
        marks.push(line + 2);
        break;
      }
    }

    // Check horizontal
    for (let row = 0; row < 3; row += 1) {
      if (
        this.Marks[row + 0].State == this.Marks[row + 3].State &&
        this.Marks[row + 3].State == this.Marks[row + 6].State &&
        this.Marks[row].State != -1
      ) {
        foundWinner = true;
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
      foundWinner = true;
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
      foundWinner = true;
      marks.push(2);
      marks.push(4);
      marks.push(6);
    }
    if (foundWinner) {
      this.CurrentGameMarks = 0;
      this.Marks[marks[0]].SetIsWinnerMark(true);
      this.Marks[marks[1]].SetIsWinnerMark(true);
      this.Marks[marks[2]].SetIsWinnerMark(true);
      this.Marks.forEach((mark) => {
        mark.SetDisabled();
      });
      setTimeout(() => {
        this.RecentWinners.push(
          new Win(this.Players[this.Turn ? 0 : 1].Name, this.Turn ? 'O' : 'X')
        );
        this.Players[this.Turn ? 0 : 1].Score++;
        this.resetBoard();
      }, 1000);
    }
    return foundWinner;
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
        this.Players.push(new Player('Computer'));
        break;
      default:
        break;
    }
  }

  ComputerMove() {
    this.Marks.forEach(mark => {
      mark.SetDisabled();
    })
    setTimeout(() => {
      let move = Math.round(Math.random() * 8);
      while(this.Marks[move].State != -1 && this.CurrentGameMarks < 9)
      {
        move = Math.round(Math.random() * 8);
      }
      this.Marks[move].UpdateState(1);
      this.Marks.forEach(mark => {
        mark.SetEnabled();
      })
    }, 1000);
    this.Turn = !this.Turn;
  }

  Move(markIndex) {
    if(this.Marks[markIndex].State == -1)
    {
      this.Marks[markIndex].UpdateState(this.Turn ? 1 : 0);
      this.Turn = !this.Turn;
      if(!this.checkForWinner() && this.Turn && this.Mode == Mode.AgainstComputer)
      {
        this.ComputerMove();
      }
    }
  }
  resetBoard() {
    this.Marks.forEach((mark) => {
      mark.UpdateState(-1);
      mark.SetIsWinnerMark(false);
      mark.SetEnabled();
    });
    this.Turn = false;
  }
}

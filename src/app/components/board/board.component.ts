import { Component, OnInit } from '@angular/core';
import { XOService } from '../../services/xo.service';
import { Mode } from '../../enums/mode.enum';
import { Win } from '../../models/win';
import { Mark } from '../../models/mark';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  public Marks: Array<Mark>;
  public Turn: boolean;
  public CurrentGameMarks: number;
  constructor(public XOS: XOService) {
    this.Turn = false;
    this.Marks = new Array<Mark>();
    for (let index = 0; index < 9; index++) {
      this.Marks.push(new Mark(index));
    }
    this.CurrentGameMarks = 0;
  }

  checkForWinner(): boolean {
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
        this.XOS.OnWin(
          new Win(this.XOS.Players[this.Turn ? 0 : 1], this.Turn ? 'O' : 'X')
        );
        this.XOS.Players[this.Turn ? 0 : 1].Score++;
        this.resetBoard();
      }, 1000);
    }
    return foundWinner;
  }

  ComputerMove() {
    this.Marks.forEach((mark) => {
      mark.SetDisabled();
    });
    setTimeout(() => {
      let move = Math.round(Math.random() * 8);
      while (this.Marks[move].State != -1) {
        move = Math.round(Math.random() * 8);
      }
      this.Marks[move].UpdateState(1);
      this.CurrentGameMarks++;
      this.checkForWinner();
      this.Marks.forEach((mark) => {
        mark.SetEnabled();
      });
      this.Turn = !this.Turn;
    }, 1000);
  }

  Move(index) {
    if (this.Marks[index].State == -1) {
      this.Marks[index].UpdateState(this.Turn ? 1 : 0);
      this.CurrentGameMarks++;
      this.Turn = !this.Turn;
      if (
        !this.checkForWinner() &&
        this.Turn &&
        this.XOS.Mode == Mode.AgainstComputer &&
        this.CurrentGameMarks < 9
      ) {
        this.ComputerMove();
      }
    }
  }

  resetBoard() {
    this.Marks.forEach((mark) => {
      mark.Reset();
    });
    this.Turn = false;
  }
  ngOnInit(): void {}
}

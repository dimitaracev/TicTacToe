import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class XOService {
  public turn: Boolean = false;
  public board: Array<Object>;
  public players: Array<Object>;
  public onStateChange: Subject<Object>;
  public onWin: Subject<number>;
  private alreadyWon: number = 0;
  constructor() {
    this.players = [
      {
        index: 0,
        name: 'Player 1',
        score: 0,
      },
      {
        index: 1,
        name: 'Player 2',
        score: 0,
      },
    ];
    this.onStateChange = new Subject<Object>();
    this.onWin = new Subject<number>();
    this.board = new Array<number>(9);
    for (let i = 0; i < 9; i++) {
      this.board[i] = { id: i, state: -1 };
    }
  }
  private checkForWinner(): number {
    // Check vertical
    let winner = -1;
    let tiles = [];
    for (let line = 0; line < 9; line += 3) {
      if (
        this.board[line]['state'] == this.board[line + 1]['state'] &&
        this.board[line + 1]['state'] == this.board[line + 2]['state'] &&
        this.board[line]['state'] != -1
      ) {
        this.players[this.board[line]['state']]['score']++;
        winner = this.board[line]['state'];
        tiles.push(line);
        tiles.push(line + 1);
        tiles.push(line + 2);
        break;
      }
    }

    // Check horizontal
    for (let row = 0; row < 3; row += 1) {
      if (
        this.board[row]['state'] == this.board[row + 3]['state'] &&
        this.board[row + 3]['state'] == this.board[row + 6]['state'] &&
        this.board[row]['state'] != -1
      ) {
        this.players[this.board[row]['state']]['score']++;
        winner = this.board[row]['state'];
        tiles.push(row);
        tiles.push(row + 3);
        tiles.push(row + 6);
        break;
      }
    }

    // Check diagonal l
    if (
      this.board[0]['state'] == this.board[4]['state'] &&
      this.board[4]['state'] == this.board[8]['state'] &&
      this.board[0]['state'] != -1
    ) {
      this.players[this.board[4]['state']]['score']++;
      winner = this.board[4]['state'];
      tiles.push(0);
      tiles.push(4);
      tiles.push(8);
    }

    // Check diagonal r
    if (
      this.board[2]['state'] == this.board[4]['state'] &&
      this.board[4]['state'] == this.board[6]['state'] &&
      this.board[2]['state'] != -1
    ) {
      this.players[this.board[4]['state']]['score']++;
      winner = this.board[4]['state'];
      tiles.push(2);
      tiles.push(4);
      tiles.push(6);
    }
    if (winner != -1) {
      let state = { id: 'showWinningTiles', data: tiles };
      this.onStateChange.next(state);
    }
    return winner;
  }

  tag(i) {
    if (this.board[i]['state'] == -1) {
      this.board[i]['state'] = this.turn ? 1 : 0;
      let state = { id: 'tag', data: this.board[i] };
      this.onStateChange.next(state);
      this.turn = !this.turn;
      if (this.alreadyWon == 0) {
        let winner = this.checkForWinner();
        if (winner != -1) {
          this.board.forEach((tile) => {
            tile['state'] = -3;
          });
        }
        setTimeout(() => {
          if (winner != -1) {
            this.onWin.next(winner);
            this.alreadyWon = 1;
            this.resetBoard();
          }
        }, 1000);
      }
    }
    let minus1s = 0;
    this.board.forEach((tile) => {
      if (tile['state'] == -1 || tile['state'] == -3) minus1s += 1;
    });
    if (minus1s == 0) {
      setTimeout(() => {
        this.resetBoard();
      }, 1000);
    }
  }
  resetBoard() {
    for (let i = 0; i < this.board.length; i++) {
      this.board[i]['state'] = -1;
      this.onStateChange.next(this.board[i]);
      let state = { id: 'reset', data: i };
      this.onStateChange.next(state);
    }
    this.turn = false;
    this.alreadyWon = 0;
  }
}

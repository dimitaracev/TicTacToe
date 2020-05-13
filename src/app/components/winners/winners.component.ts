import { Component, OnInit } from '@angular/core';
import { XOService } from '../../services/xo.service';
import { Win } from '../../models/win';
@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css'],
})
export class WinnersComponent implements OnInit {
  public recentWins: Array<Win>;
  constructor(public XOS: XOService) {
    this.recentWins = new Array<Win>();
    XOS.Recent.subscribe((win) => {
      this.recentWins.push(win);
    });
  }

  ngOnInit(): void {}
}

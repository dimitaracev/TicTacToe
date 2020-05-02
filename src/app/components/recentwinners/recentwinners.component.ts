import { Component, OnInit } from '@angular/core';
import { XOService } from '../../services/xo.service';
@Component({
  selector: 'app-recentwinners',
  templateUrl: './recentwinners.component.html',
  styleUrls: ['./recentwinners.component.css'],
})
export class RecentwinnersComponent implements OnInit {
  public recentWins: Array<Object>;
  constructor(public XOS: XOService) {
    this.recentWins = new Array<Number>();
    XOS.onWin.subscribe((winner) => {
      this.recentWins.push(winner);
    });
  }

  ngOnInit(): void {}
}

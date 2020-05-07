import { Component, OnInit } from '@angular/core';
import { XOService } from '../../services/xo.service';
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent implements OnInit {
  constructor(public XOS: XOService) {}

  ngOnInit(): void {}

  resetLeaderboard() {
    this.XOS.Players[0].Score = 0;
    this.XOS.Players[1].Score = 0;
  }
}

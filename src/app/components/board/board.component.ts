import { Component, OnInit } from '@angular/core';
import { XOService } from '../../services/xo.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  constructor(public XOS: XOService) {  }

  ngOnInit(): void {}

  tag(i) {
    this.XOS.tag(i);
  }
  resetBoard(){
    this.XOS.resetBoard();
  }
}

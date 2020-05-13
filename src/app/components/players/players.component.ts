import { Component, OnInit } from '@angular/core';
import {XOService} from '../../services/xo.service';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  
  constructor(public XOS : XOService) {
    
   }

  ngOnInit(): void {
  }

}

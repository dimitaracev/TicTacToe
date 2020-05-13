import { Component, OnInit } from '@angular/core';
import { XOService } from '../../services/xo.service'; 
import { Mode } from 'src/app/enums/mode.enum';
@Component({
  selector: 'app-opponent',
  templateUrl: './opponent.component.html',
  styleUrls: ['./opponent.component.css']
})
export class OpponentComponent implements OnInit {
  public Visible : boolean;
  constructor(private XOS : XOService) { 
    this.Visible = true;
  }

  ngOnInit(): void {
  }
  AnotherPlayer(){
    this.Visible = false;
    this.XOS.SetMode(Mode.AgainstPlayer);
  }
  Computer(){
    this.Visible = false;
    this.XOS.SetMode(Mode.AgainstComputer);
  }
}

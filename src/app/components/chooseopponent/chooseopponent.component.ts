import { Component, OnInit } from '@angular/core';
import { XOService } from '../../services/xo.service'; 
import { Mode } from 'src/app/enums/mode.enum';
@Component({
  selector: 'app-chooseopponent',
  templateUrl: './chooseopponent.component.html',
  styleUrls: ['./chooseopponent.component.css']
})
export class ChooseopponentComponent implements OnInit {
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

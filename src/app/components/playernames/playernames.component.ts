import { Component, OnInit } from '@angular/core';
import {XOService} from '../../services/xo.service';
@Component({
  selector: 'app-playernames',
  templateUrl: './playernames.component.html',
  styleUrls: ['./playernames.component.css']
})
export class PlayernamesComponent implements OnInit {

  
  constructor(public XOS : XOService) {
    
   }

  ngOnInit(): void {
  }

}

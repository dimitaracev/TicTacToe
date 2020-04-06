import { Component, OnInit, Input } from '@angular/core';
import { XOService } from '../../services/xo.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() public id : number;
  public state : number = -1;
  public winnerTile = 0;
  constructor(public XOS : XOService) {
    XOS.onStateChange.subscribe(state => {
        if(state['id'] === 'tag')
        {
          if(this.id === state['data']['id']){
          this.state = state['data']['state'];
          }
        }
        else if(state['id'] === 'showWinningTiles')
        {
          for(let index of state['data'])
          {
            if(this.id === index)
            {
              this.winnerTile = 1;
            }
          }
        }
        else if(state['id'] === 'reset')
        {
            if(state['data'] == this.id){
              this.winnerTile = 0;
              this.state = -1;
            }
        }
    })
  } 

  ngOnInit(): void {
  }
  
}

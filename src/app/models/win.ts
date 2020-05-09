import {Player} from './player';
export class Win {
    public Winner : Player;
    public Side : string;
    constructor(Winner : Player, Side: string)
    {
        this.Winner = Winner;
        this.Side = Side;
    }
}

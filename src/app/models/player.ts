export class Player {
    public Name : string;
    public Score : number;
    constructor(Name : string)
    {
        this.Name = Name;
        this.Score = 0;
    }
    
    IsComputer() : boolean {
        return this.constructor.name === 'Computer';
    }
}

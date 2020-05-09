export class Mark {
  public Id: number;
  public State: number;
  public IsWinnerMark: boolean;
  public Disabled : boolean;

  constructor(Id: number) {
    this.Id = Id;
    this.State = -1;
    this.IsWinnerMark = false;
    this.Disabled = false;
  }

  UpdateState(State: number) {
    if (this.State != State) this.State = State;
  }
  
  SetIsWinnerMark(IsWinnerMark: boolean) {
    if (this.IsWinnerMark != IsWinnerMark) this.IsWinnerMark = IsWinnerMark;
  }

  SetDisabled(){
    this.Disabled = true;
  }
  SetEnabled()
  {
    this.Disabled = false;
  }

  Reset() {
      this.State = -1;
      this.IsWinnerMark = false;
      this.Disabled = false;
  }
}

export class Mark {
  public Id: number;
  public State: number;
  public IsWinnerMark: boolean;

  constructor(Id: number) {
    this.Id = Id;
    this.State = -1;
    this.IsWinnerMark = false;
  }

  UpdateState(State: number) {
    if (this.State != State) this.State = State;
  }
  
  SetIsWinnerMark(IsWinnerMark: boolean) {
    if (this.IsWinnerMark != IsWinnerMark) this.IsWinnerMark = IsWinnerMark;
  }
  Reset() {
      this.State = -1;
      this.IsWinnerMark = false;
  }
}

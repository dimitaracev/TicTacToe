import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentwinnersComponent } from './recentwinners.component';

describe('RecentwinnersComponent', () => {
  let component: RecentwinnersComponent;
  let fixture: ComponentFixture<RecentwinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentwinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentwinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

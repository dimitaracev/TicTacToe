import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayernamesComponent } from './playernames.component';

describe('PlayernamesComponent', () => {
  let component: PlayernamesComponent;
  let fixture: ComponentFixture<PlayernamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayernamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayernamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

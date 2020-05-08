import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseopponentComponent } from './chooseopponent.component';

describe('ChooseopponentComponent', () => {
  let component: ChooseopponentComponent;
  let fixture: ComponentFixture<ChooseopponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseopponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseopponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

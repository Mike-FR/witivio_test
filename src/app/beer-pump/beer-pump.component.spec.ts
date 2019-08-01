import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerPumpComponent } from './beer-pump.component';

describe('BeerPumpComponent', () => {
  let component: BeerPumpComponent;
  let fixture: ComponentFixture<BeerPumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerPumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerPumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

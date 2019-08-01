import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPumpComponent } from './admin-pump.component';

describe('AdminPumpComponent', () => {
  let component: AdminPumpComponent;
  let fixture: ComponentFixture<AdminPumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

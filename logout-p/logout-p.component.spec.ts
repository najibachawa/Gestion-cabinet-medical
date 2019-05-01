import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutPComponent } from './logout-p.component';

describe('LogoutPComponent', () => {
  let component: LogoutPComponent;
  let fixture: ComponentFixture<LogoutPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

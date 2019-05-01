import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribePComponent } from './subscribe-p.component';

describe('SubscribePComponent', () => {
  let component: SubscribePComponent;
  let fixture: ComponentFixture<SubscribePComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribePComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

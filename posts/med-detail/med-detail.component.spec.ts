import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedDetailComponent } from './med-detail.component';

describe('MedDetailComponent', () => {
  let component: MedDetailComponent;
  let fixture: ComponentFixture<MedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

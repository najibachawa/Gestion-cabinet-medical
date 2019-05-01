import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedComponent } from './list-med.component';

describe('ListMedComponent', () => {
  let component: ListMedComponent;
  let fixture: ComponentFixture<ListMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenugasanListComponent } from './penugasan-list.component';

describe('PenugasanListComponent', () => {
  let component: PenugasanListComponent;
  let fixture: ComponentFixture<PenugasanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenugasanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenugasanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

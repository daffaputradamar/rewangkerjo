import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenugasanItemComponent } from './penugasan-item.component';

describe('PenugasanItemComponent', () => {
  let component: PenugasanItemComponent;
  let fixture: ComponentFixture<PenugasanItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenugasanItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenugasanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

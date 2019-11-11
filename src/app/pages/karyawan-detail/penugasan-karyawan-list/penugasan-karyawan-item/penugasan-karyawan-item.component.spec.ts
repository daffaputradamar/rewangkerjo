import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenugasanKaryawanItemComponent } from './penugasan-karyawan-item.component';

describe('PenugasanKaryawanItemComponent', () => {
  let component: PenugasanKaryawanItemComponent;
  let fixture: ComponentFixture<PenugasanKaryawanItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenugasanKaryawanItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenugasanKaryawanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

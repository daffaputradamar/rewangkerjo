import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenugasanKaryawanListComponent } from './penugasan-karyawan-list.component';

describe('PenugasanKaryawanListComponent', () => {
  let component: PenugasanKaryawanListComponent;
  let fixture: ComponentFixture<PenugasanKaryawanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenugasanKaryawanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenugasanKaryawanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

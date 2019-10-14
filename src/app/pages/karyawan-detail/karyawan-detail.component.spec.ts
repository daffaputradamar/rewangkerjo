import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaryawanDetailComponent } from './karyawan-detail.component';

describe('KaryawanDetailComponent', () => {
  let component: KaryawanDetailComponent;
  let fixture: ComponentFixture<KaryawanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaryawanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaryawanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

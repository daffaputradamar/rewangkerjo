import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaryawanCategoriesComponent } from './karyawan-categories.component';

describe('KaryawanCategoriesComponent', () => {
  let component: KaryawanCategoriesComponent;
  let fixture: ComponentFixture<KaryawanCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaryawanCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaryawanCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

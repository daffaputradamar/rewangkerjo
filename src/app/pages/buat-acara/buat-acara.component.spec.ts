import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuatAcaraComponent } from './buat-acara.component';

describe('BuatAcaraComponent', () => {
  let component: BuatAcaraComponent;
  let fixture: ComponentFixture<BuatAcaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuatAcaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuatAcaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DokumenItemComponent } from './dokumen-item.component';

describe('DokumenItemComponent', () => {
  let component: DokumenItemComponent;
  let fixture: ComponentFixture<DokumenItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DokumenItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DokumenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

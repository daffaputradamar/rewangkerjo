import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DokumenListComponent } from './dokumen-list.component';

describe('DokumenListComponent', () => {
  let component: DokumenListComponent;
  let fixture: ComponentFixture<DokumenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DokumenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DokumenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

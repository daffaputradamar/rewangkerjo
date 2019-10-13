import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaraDeskripsiComponent } from './acara-deskripsi.component';

describe('AcaraDeskripsiComponent', () => {
  let component: AcaraDeskripsiComponent;
  let fixture: ComponentFixture<AcaraDeskripsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcaraDeskripsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaraDeskripsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

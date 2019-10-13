import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanitiaListComponent } from './panitia-list.component';

describe('PanitiaListComponent', () => {
  let component: PanitiaListComponent;
  let fixture: ComponentFixture<PanitiaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanitiaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanitiaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

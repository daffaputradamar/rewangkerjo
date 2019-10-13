import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanitiaItemComponent } from './panitia-item.component';

describe('PanitiaItemComponent', () => {
  let component: PanitiaItemComponent;
  let fixture: ComponentFixture<PanitiaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanitiaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanitiaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

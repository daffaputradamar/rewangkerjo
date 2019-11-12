import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAdminItemComponent } from './vendor-admin-item.component';

describe('VendorAdminItemComponent', () => {
  let component: VendorAdminItemComponent;
  let fixture: ComponentFixture<VendorAdminItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorAdminItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorAdminItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

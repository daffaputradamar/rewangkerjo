import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAdminListComponent } from './vendor-admin-list.component';

describe('VendorAdminListComponent', () => {
  let component: VendorAdminListComponent;
  let fixture: ComponentFixture<VendorAdminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorAdminListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

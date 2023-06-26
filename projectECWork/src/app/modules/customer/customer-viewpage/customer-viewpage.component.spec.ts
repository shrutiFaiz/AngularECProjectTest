import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewpageComponent } from './customer-viewpage.component';

describe('CustomerViewpageComponent', () => {
  let component: CustomerViewpageComponent;
  let fixture: ComponentFixture<CustomerViewpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerViewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

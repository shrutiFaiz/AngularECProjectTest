import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrpoductdetailsComponent } from './showrpoductdetails.component';

describe('ShowrpoductdetailsComponent', () => {
  let component: ShowrpoductdetailsComponent;
  let fixture: ComponentFixture<ShowrpoductdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowrpoductdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowrpoductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

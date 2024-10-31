import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterinfoComponent } from './registerinfo.component';

describe('RegisterinfoComponent', () => {
  let component: RegisterinfoComponent;
  let fixture: ComponentFixture<RegisterinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

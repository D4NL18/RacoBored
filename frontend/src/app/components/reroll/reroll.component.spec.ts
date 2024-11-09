import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RerollComponent } from './reroll.component';

describe('RerollComponent', () => {
  let component: RerollComponent;
  let fixture: ComponentFixture<RerollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RerollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RerollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessondashboardComponent } from './lessondashboard.component';

describe('LessondashboardComponent', () => {
  let component: LessondashboardComponent;
  let fixture: ComponentFixture<LessondashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessondashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessondashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

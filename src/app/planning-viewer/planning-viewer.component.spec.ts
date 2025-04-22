import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningViewerComponent } from './planning-viewer.component';

describe('PlanningViewerComponent', () => {
  let component: PlanningViewerComponent;
  let fixture: ComponentFixture<PlanningViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanningViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

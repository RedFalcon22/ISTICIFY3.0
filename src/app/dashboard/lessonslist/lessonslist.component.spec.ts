import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonslistComponent } from './lessonslist.component';

describe('LessonslistComponent', () => {
  let component: LessonslistComponent;
  let fixture: ComponentFixture<LessonslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

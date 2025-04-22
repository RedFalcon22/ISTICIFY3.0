import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentifpageComponent } from './authentifpage.component';

describe('AuthentifpageComponent', () => {
  let component: AuthentifpageComponent;
  let fixture: ComponentFixture<AuthentifpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthentifpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthentifpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

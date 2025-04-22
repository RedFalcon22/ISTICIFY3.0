import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle chat window', () => {
    expect(component.showChatWindow).toBeFalse();
    component.toggleChatWindow();
    expect(component.showChatWindow).toBeTrue();
    component.toggleChatWindow();
    expect(component.showChatWindow).toBeFalse();
  });

  it('should switch tabs', () => {
    expect(component.activeTab).toBe('student');
    component.switchTab('admin');
    expect(component.activeTab).toBe('admin');
    component.switchTab('student');
    expect(component.activeTab).toBe('student');
  });

  it('should mark student as absent', () => {
    spyOn(console, 'log');
    component.markAbsent('Élève 1');
    expect(console.log).toHaveBeenCalledWith('Élève 1 est marqué comme absent.');
  });
});
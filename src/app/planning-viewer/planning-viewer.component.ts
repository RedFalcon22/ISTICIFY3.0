import { Component } from '@angular/core';

@Component({
  selector: 'app-planning-viewer',
  standalone: false,
  templateUrl: './planning-viewer.component.html',
  styleUrls: ['./planning-viewer.component.css']
})
export class PlanningViewerComponent {
  typesPlanning: { [key: string]: string } = {
    daily: 'Planning journalier',
    exams: 'Planning de surveillance des examens',
    blocA: 'Planning Bloc A',
    blocB: 'Planning Bloc B',
    blocC: 'Planning Bloc C',
    blocD: 'Planning Bloc D',
    blocE: 'Planning Bloc E'
  };
  isSidebarCollapsed = false;
  planningSelectionne: string = 'daily';

  fichiersPlanning: {
    [key: string]: { nom: string; url: string }[]
  } = {
    daily: [
      { nom: 'daily.jpg', url: 'table.png' }
    ],
    exams: [
      { nom: 'exams.jpg', url: '' }
    ],
    blocA: [
      { nom: 'blocA.jpg', url: 'table.png' }
    ],
    blocB: [
      { nom: 'blocB.jpg', url: 'table.png' }
    ],
    blocC: [
      { nom: 'blocC.jpg', url: 'table.png' }
    ],
    blocD: [
      { nom: 'blocD.jpg', url: 'table.png' }
    ],
    blocE: [
      { nom: 'blocE.jpg', url: 'table.png' }
    ]
  };

  get examPlanningAvailable(): boolean {
    return this.fichiersPlanning['exams'] && this.fichiersPlanning['exams'].length > 2;
  }
  
  // UI Actions
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  selectionnerPlanning(type: string): void {
    this.planningSelectionne = type;
  }

  get nomPlanningSelectionne(): string {
    return this.typesPlanning[this.planningSelectionne] || 'Planning';
  }
}
import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { WeeklyscheduleComponent } from '../../dashboard/weeklyschedule/weeklyschedule.component';
import { SidebarComponent } from '../../dashboard/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-lessondashboard',
  imports: [
    CommonModule,
    WeeklyscheduleComponent,
    SidebarComponent,
    FormsModule,
    RouterModule,
],
  templateUrl: './lessondashboard.component.html',
  styleUrls: ['./lessondashboard.component.css']
})
export class LessondashboardComponent {
  isSidebarCollapsed = false;

  subjects = [
    {
      title: 'AI Security',
      data: [
        { id: 1, startDate: new Date('2025-05-01T08:00:00'), endDate: new Date('2025-05-01T10:00:00'), title: 'AI Lesson 1', files: ['ai1.pdf', 'ai2.pdf'] },
        { id: 2, startDate: new Date('2025-05-02T09:00:00'), endDate: new Date('2025-05-02T11:00:00'), title: 'AI Lesson 2', files: ['ai3.pdf'] }
      ]
    },
    {
      title: 'Web_Development',
      data: [
        { id: 1, startDate: new Date('2025-05-10T09:00:00'), endDate: new Date('2025-05-10T11:00:00'), title: 'Web Dev Lesson 1', files: ['web1.pdf'] },
        { id: 2, startDate: new Date('2025-05-12T10:00:00'), endDate: new Date('2025-05-12T12:00:00'), title: 'Web Dev Lesson 2', files: ['web2.pdf', 'web3.pdf'] }
      ]
    },
    // More subjects can be added here...
  ];

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}

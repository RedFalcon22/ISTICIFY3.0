import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { ClassdetailsComponent } from '../classdetails/classdetails.component';
import { WeeklyscheduleComponent } from '../weeklyschedule/weeklyschedule.component';
import { RightSidebarComponent } from '../right-sidebar/right-sidebar.component';
import { MessagerieComponent } from '../../messagerie/messagerie.component';

@Component({
  selector: 'app-dashboardpage',
  imports:[SidebarComponent, CommonModule, ClassdetailsComponent, WeeklyscheduleComponent, RightSidebarComponent, MessagerieComponent],
  templateUrl: './dashboardpage.component.html',
  styleUrl: './dashboardpage.component.css'
})

export class DashboardpageComponent {
  isSidebarCollapsed = false;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
import { Component } from '@angular/core';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { ClassdetailsComponent } from './dashboard/classdetails/classdetails.component';
import { WeeklyscheduleComponent } from './dashboard/weeklyschedule/weeklyschedule.component';
import { RightSidebarComponent } from './dashboard/right-sidebar/right-sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports:[CommonModule, RouterModule],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isSidebarCollapsed = false;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
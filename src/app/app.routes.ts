import { Routes } from '@angular/router';
import { DashboardpageComponent } from './dashboard/dashboardpage/dashboardpage.component';
import { LessondashboardComponent } from './lessonsDashboard/lessondashboard/lessondashboard.component';
import { SubjectManagementComponent } from './lessonsDashboard/subject-management/subject-management.component';

export const routes: Routes = [
    { path: '', component: DashboardpageComponent },
    { path: 'dashboard', component: DashboardpageComponent },
    { path: 'lessons', component: LessondashboardComponent },
    { path: 'lessons/subject/:id', component: SubjectManagementComponent },
];

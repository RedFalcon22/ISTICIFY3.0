import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentifpageComponent } from './consulterpage/authentifpage/authentifpage.component';
import { SignupComponent } from './consulterpage/signup/signup.component';
import { WelcomeComponent } from './consulterpage/welcome/welcome.component';
import { AproposComponent } from './consulterpage/apropos/apropos.component';
import { ContactComponent } from './consulterpage/contact/contact.component';
import { DashboardpageComponent } from './dashboard/dashboardpage/dashboardpage.component';
import { CalendarComponent } from './dashboard/calendar/calendar.component';
import { LessonslistComponent } from './dashboard/lessonslist/lessonslist.component';
import { ClassdetailsComponent } from './dashboard/classdetails/classdetails.component';
import { RightSidebarComponent } from './dashboard/right-sidebar/right-sidebar.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { WeeklyscheduleComponent } from './dashboard/weeklyschedule/weeklyschedule.component';

const routes: Routes = [
  { path: '', redirectTo: '/Bienvenue', pathMatch: 'full' },
  { path: 'Bienvenue', component: WelcomeComponent },
  { path: 'Sinscrire', component: SignupComponent },
  { path: 'Seconnecter', component: AuthentifpageComponent },
  { path: 'Apropos', component: AproposComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Dashboard', component: DashboardpageComponent },
  { path: 'Calendar', component: CalendarComponent },
  { path: 'Lessons', component: LessonslistComponent },
  { path: 'ClassDetails', component: ClassdetailsComponent },
  { path: 'RightSidebar', component: RightSidebarComponent },
  { path: 'Sidebar', component: SidebarComponent },
  { path: 'WeeklySchedule', component: WeeklyscheduleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { MessagerieComponent } from './messagerie/messagerie.component';
import { QuizComponent } from './quiz/quiz.component';
import { SubjectManagementComponent } from './lessonsDashboard/subject-management/subject-management.component';
import { LessondashboardComponent } from './lessonsDashboard/lessondashboard/lessondashboard.component';
import { AbsenceManagementComponent } from './absence-management/absence-management.component';
import { PlanningViewerComponent } from './planning-viewer/planning-viewer.component';
import { DemandeRattrapageComponent } from './demande-rattrapage/demande-rattrapage.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentifpageComponent,
    SignupComponent,
    WelcomeComponent,
    AproposComponent,
    ContactComponent,
    AbsenceManagementComponent,
    PlanningViewerComponent,
    DemandeRattrapageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DashboardpageComponent,
    CalendarComponent,
    LessonslistComponent,
    ClassdetailsComponent,
    RightSidebarComponent,
    SidebarComponent,
    WeeklyscheduleComponent,
    MessagerieComponent,
    QuizComponent,
    SubjectManagementComponent,
    LessondashboardComponent,
    
  ],
  providers: [
    DatePipe // Add DatePipe to providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentifpageComponent } from './consulterpage/authentifpage/authentifpage.component';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    AuthentifpageComponent,
    SignupComponent,
    WelcomeComponent,
    AproposComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DashboardpageComponent,
    CalendarComponent,
    LessonslistComponent,
    ClassdetailsComponent,
    RightSidebarComponent,
    SidebarComponent,
    WeeklyscheduleComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

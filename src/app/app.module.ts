import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DoctorPageComponent } from './components/doctor-page/doctor-page.component';
import { AppointmentInfoComponent } from './components/appointment-info/appointment-info.component';

import {RouterModule} from '@angular/router';
import { ThemeComponent } from './components/theme/theme.component';
import { DrSchedulePageComponent } from './components/dr-schedule-page/dr-schedule-page.component';
import {MatInputModule} from '@angular/material/Input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DrSlotComponent } from './components/dr-slot/dr-slot.component';
import { DrXComponent } from './components/dr-x/dr-x.component';
import { DrMComponent } from './components/dr-m/dr-m.component';





@NgModule({
  declarations: [
    AppComponent,
    DoctorPageComponent,
    AppointmentInfoComponent,
    ThemeComponent,
    DrSchedulePageComponent,
    DrSlotComponent,
    DrXComponent,
    DrMComponent,

  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,

    RouterModule.forRoot([
      {path: '', component:DoctorPageComponent},
      {path: 'nav', component: ThemeComponent},
      {path: 'appointment', component: AppointmentInfoComponent},
      {path: 'availibility', component: DrSchedulePageComponent},
      {path: 'slot', component: DrSlotComponent},
      {path: 'm', component: DrMComponent},
      {path: 'x', component: DrXComponent},
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

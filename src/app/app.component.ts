import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:'<app-theme></app-theme><router-outlet></router-outlet>',
 // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent {
  title = 'drAppointment';
}

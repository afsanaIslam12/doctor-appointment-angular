import { Component, OnInit } from '@angular/core';
import doctors from 'src/app/jsonDataFiles/docotors.json';
import * as moment from 'moment';

@Component({
  selector: 'app-dr-schedule-page',
  templateUrl: './dr-schedule-page.component.html',
  styleUrls: ['./dr-schedule-page.component.css']
})
export class DrSchedulePageComponent implements OnInit {
  public doctorsList:{name:string,org:string}[]=doctors;
  DrSchedulePage:any;

  constructor() { }

  ngOnInit(): void {
this.DrSchedulePage=moment().subtract(0, 'days').calendar();

  }

}



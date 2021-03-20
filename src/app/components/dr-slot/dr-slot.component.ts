import { Component, OnInit } from '@angular/core';
import * as moment from "moment";
import doctors from 'src/app/jsonDataFiles/docotors.json';
@Component({
  selector: 'app-dr-slot',
  templateUrl: './dr-slot.component.html',
  styleUrls: ['./dr-slot.component.css']
})
export class DrSlotComponent implements OnInit {


  getTimeStops(start: any, end: any) {
    var startTime = moment(start, 'HH:mm');
    var endTime = moment(end, 'HH:mm');

    if (endTime.isBefore(startTime)) {
      endTime.add(1, 'day');
    }

    var timeStops = [];

    while (startTime <= endTime) {
      timeStops.push(moment(startTime).format('hh:mm A'));
      startTime.add(15, 'minutes');
    }
    return timeStops;
  }
  timeStops = this.getTimeStops('10:00', '18:00')
  public doctorsList:{name:string,org:string}[]=doctors;
  constructor() { }

  ngOnInit(): void {
  }

}

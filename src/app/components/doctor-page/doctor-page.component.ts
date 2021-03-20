import { Component, OnInit } from '@angular/core';

import doctors from 'src/app/jsonDataFiles/docotors.json';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css']
})
export class DoctorPageComponent implements OnInit {

  public doctorsList:{name:string,org:string}[]=doctors;

  constructor() { }

  ngOnInit(): void {
  }

}




// import { Component, OnInit } from '@angular/core';
// import doctors from 'src\app\jsonDataFiles\docotors.json';

// @Component({
//   selector: 'app-doctor-page',
//   templateUrl: './doctor-page.component.html',
//   styleUrls: ['./doctor-page.component.css']
// })
// export class DoctorPageComponent implements OnInit {
//   public doctorsList:{name:string,org:string}[]=doctors;

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


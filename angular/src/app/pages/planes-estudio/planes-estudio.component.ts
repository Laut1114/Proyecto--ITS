import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planes-estudio',
  templateUrl: './planes-estudio.component.html',
  styleUrls: ['./planes-estudio.component.css']
})
export class PlanesEstudioComponent implements OnInit {

  carrera: string = "";

  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(_params => {
      this.carrera = _params['carrera'];
    });
  }

  ngOnInit(): void {
  }

}

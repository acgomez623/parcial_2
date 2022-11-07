import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  carousel1:string="../../assets/img/ucp1.jpg";
  carousel2:string="../../assets/img/ucp2.jpg";
  img_card:string="../../assets/img/tds1.JPG";
  conoce_mas:string="https://www.ucp.edu.co/pregrado/tecnologia-en-sistemas/";
  biblioteca:string="../../assets/img/biblioteca.jpg";
  cie:string="../../assets/img/CIE.jpg";
  capsi:string="../../assets/img/capsi.png";
  link_biblioteca:string="https://biblioteca.ucp.edu.co/";
  link_cie:string="https://www.ucp.edu.co/virtual/";
  link_capsi:string="https://www.ucp.edu.co/capsi/";
  constructor() { }

  ngOnInit(): void {
  }

}

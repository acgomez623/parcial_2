import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  img_ppl:string="../../assets/img/ucp.png";
  constructor() { }

  ngOnInit(): void {
  }

}

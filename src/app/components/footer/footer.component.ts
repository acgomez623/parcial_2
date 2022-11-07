import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  facebook:string="../../assets/img/face.png";
  ig:string="../../assets/img/insta.png";
  twitter:string="../../assets/img/tw.png";
  tiktok:string="../../assets/img/tik.png";
  youtube:string="../../assets/img/you.png";

  link_facebook:string="https://www.facebook.com/ucatolicadepereira/";
  link_ig:string="https://www.instagram.com/ucatolicadepereira/";
  link_twitter:string="https://twitter.com/UCatolicaPei";
  link_tiktok:string="https://www.tiktok.com/@ucatolicadepereira";
  link_youtube:string="https://www.youtube.com/user/CanalUCP";

  politica:string="https://www.ucp.edu.co/secretaria-general/";
  constructor() { }

  ngOnInit(): void {
  }

}

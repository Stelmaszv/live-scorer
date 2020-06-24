import { Component, OnInit } from '@angular/core';
import { Auth_Service } from '../../../../service/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  if_auth:boolean;
  constructor(private Auth_Service:Auth_Service) { }

  ngOnInit(): void {
    this.if_auth=this.Auth_Service.if_auth();
  }
}

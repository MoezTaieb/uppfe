import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  isLoggedIn;
  ngOnInit() {
    this.isLoggedIn = this.userService.isLoggedIn();
    console.log('this.userService.isLoggedIn')
    console.log(this.userService.isLoggedIn())
  }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['login']);
    location.reload();
  }
}

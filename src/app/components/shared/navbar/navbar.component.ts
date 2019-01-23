import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private searchHidden = true;
  private loggedIn = false;
  private registration = false;
  private loggedInUser: string;
  private user: User = new User();

  constructor(
    private router: Router,
    private loginService: LoginService,
    private userService: UserService
  ) { }

  isRegister(): boolean {
    this.registration = true;
    return this.registration;
  }

  logout() {
    this.loginService.logout().subscribe(
      res => {
        this.loggedIn = false;
        this.loggedInUser = null;
        console.log(`app-status:> NavbarComponent - logout is done.`);
        this.router.navigateByUrl('/welcome');
      },
      err => {
        this.loggedInUser = null;
        console.log(err);
      }
    );
  }

  onGetCurrentUser() {
    this.userService.getCurrentUser().subscribe(
      res => {
        this.user = res;
        this.loggedInUser = this.user.username;
      },
      err => {
        console.log(err);
      }
    );
  }



  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn = true;
        this.onGetCurrentUser();
        console.log(`app-status:> NavbarComponent loaded with user: ${this.user.username}`);
      },
      err => {
        this.loggedIn = false;
        console.log(`app-status:> NavbarComponent loaded with user: ${this.user.username}`);
      }
    );
  }
}

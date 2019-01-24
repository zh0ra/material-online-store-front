import { Component, OnInit, Input } from '@angular/core';
import { AppConst } from 'src/app/constants/app-const';
import { User } from 'src/app/model/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  private servUrl = AppConst.servUrl;
  private loggedIn: boolean;
  private user: User = new User();
  private imageUploaded: boolean;

  private currentUsername: string;
  private currentUsernameEntered: boolean;

  @Input() fileUpload: string;

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router
  ) { }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(
      res => {
        this.user = res;
        this.loggedIn = true;
      },
      err => {
        this.loggedIn = false;
        console.log('OSF-debug:> Error get current user');
      }
    );
  }

  enterCurrentUsernameEvent({ value }) {

    if (this.currentUsername != null && this.currentUsername === this.user.username) {
      this.currentUsernameEntered = true;
    } else {
      this.currentUsernameEntered = false;
    }
  }

  ngOnInit() {

    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn = true;
      },
      err => {
        this.loggedIn = false;
      }
    );
    this.getCurrentUser();
    console.log('OSF-status:> UserViewComponent loaded');
  }

}

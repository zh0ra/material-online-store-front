import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldControl } from "@angular/material/form-field";
import { User } from '../../../model/user.model';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { AppConst } from '../../../constants/app-const';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  @Output() loggedInEvent = new EventEmitter<boolean>();
  @Output() loggedInUserEvent = new EventEmitter<string>();

  private servUrl = AppConst.servUrl;
  private loginForm: FormGroup;
  private user = new User();
  private username = new FormControl('');
  private password = new FormControl('');
  //private email = new FormControl('');
  private showRegistration = false;

  private loggedIn = false;
  private loggedInUser: string;
  private loginError: boolean;

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: this.username,
      password: this.password,
     // email: this.email
    });
  }

  tonggleRegistration() {
    this.showRegistration = !this.showRegistration;
  }

  onSubmit(form: any): void {
    this.user.username = this.username.value;
    this.user.password = this.password.value;
    this.onLogin();
    console.log('you submited value', form);
    console.log('user model:', this.user);

  }

  onLogin() {
    this.loginService.sendCredentials(this.user.username, this.user.password)
      .subscribe(
        res => {
          localStorage.setItem('xAuthToken', res.json().token);
          this.loggedIn = true;
          this.loggedInEvent.emit(this.loggedIn);
          this.loggedInUser = this.user.username;
          this.loggedInUserEvent.emit(this.loggedInUser);
          console.log(`app-info:> UserLoginComponent - User: ${this.user.username} successfully logged in app...`);
          this.router.navigate(['/user-view']);
        },
        err => {
          this.loggedIn = false;
          this.loggedInEvent.emit(this.loggedIn);
          this.loginError = true;
          localStorage.setItem('xAuthToken', '');
          console.log(`app-info:> UserLoginComponent - Error login user...`);
          this.router.navigate(['/welcome']);
        }
      );
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
    console.log(`app-status:> UserLoginComponent loaded`);
  }
}

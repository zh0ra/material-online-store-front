import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  private registrFrom: FormGroup;
  private user: User = new User();

  // check user value
  private usernameExists: boolean;
  private emailExists: boolean;
  private newPassword: string;
  private confirmPassword: string;
  private passwordError: boolean;

  // form control values
  private username = new FormControl('');
  private email = new FormControl('');
  private newPasswordContr = new FormControl('');
  private confirmPasswordContr = new FormControl('');

  private emailSent = false;

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private userService: UserService,
    private router: Router
  ) {
    this.registrFrom = this.fb.group({
      username: this.username,
      email: this.email,
      newPasswordContr: this.newPasswordContr,
      confirmPasswordContr: this.confirmPasswordContr
    });
  }

  onSubmit(form: any): void {
    this.user.username = this.username.value;
    this.user.email = this.email.value;
    this.newPassword = this.newPasswordContr.value;
    this.confirmPassword = this.confirmPasswordContr.value;
    this.onNewAccount();
  }

  onPasswordEqual(): boolean {
    return this.newPassword === this.confirmPassword;
  }

  onInputUsernameEvent({ target }) {
    this.userService.checkUsernameExists(target.value).subscribe(
      res => {
        const responseMessage = res.text();
        if (responseMessage === 'usernameExists') {
          this.usernameExists = true;
          console.log(`app-debug:> Error Entered username: ${this.user.username} is already registered`);
        }
      },
      err => {
        const errorMessage = err.text();
        if (errorMessage === 'usernameNotExists') {
          this.usernameExists = false;
          console.log(`app-debug:> Success! Entered username: ${this.user.username} approved as a new username in online store`);
        }
      }
    );
  }
  onInputEmailEvent({ target }) {
    this.userService.checkEmailExists(target.value).subscribe(
      res => {
        const responseMessage = res.text();
        if (responseMessage === 'emailExists') { this.emailExists = true; }
        console.log(`app-bebug:> Error! Entered email: ${this.user.email} already exists.`);
      },
      err => {
        const errorMessage = err.text();
        if (errorMessage === 'emailNotExists') { this.emailExists = false; }
        console.log(`app-debug:> Success! Entered email: ${this.user.email} approved as a new email online store`);
      }
    );
  }

  onNewAccount(): void {
    this.emailSent = false;
    if (this.onPasswordEqual()) {
      this.passwordError = false;
      this.user.password = this.newPassword;
      this.userService.newUser(
        this.user.username, this.user.email,
        this.user.password, this.user.firstName,
        this.user.lastName
      ).subscribe(
        res => {
          this.emailSent = true;
          console.log(
            `app-debug:> Registration letter was send to you ${this.user.email} address.`
          );
        },
        err => {
          const errorMessage = err.text();
          if (errorMessage === 'usernameExists') { this.usernameExists = true; }
          if (errorMessage === 'emailExists') { this.emailExists = true; }
          console.log(`app-debug:> Error user registation. Probably this username: ${this.user.username} 
          or this email ${this.user.email} already exists...`);
        }
      );
    } else {
      this.passwordError = true;
    }
  }


  ngOnInit() {
    console.log('app-status:> UserRegistrationComponent loaded');
  }

}
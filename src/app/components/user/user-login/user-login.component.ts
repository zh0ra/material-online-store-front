import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldControl } from "@angular/material/form-field";
import { User } from '../../../model/user.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  private loginForm: FormGroup;
  private user = new User();
  private username = new FormControl('');
  private password = new FormControl('');
  private email = new FormControl('');
  private showRegistration = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: this.username,
      password: this.password,
      email: this.email
    });
  }
  tonggleRegistration() {
    this.showRegistration = !this.showRegistration;
  }

  onSubmit(form: any): void {
    this.user.username = this.username.value;
    this.user.password = this.password.value;
    console.log('you submited value', form);
    console.log('user model:', this.user);
  }

  ngOnInit() {

  }
}

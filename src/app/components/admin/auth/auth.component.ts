import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router) { }

  authentificate(form: NgForm) {
    if (form.valid) {
      // make authenti
      this.router.navigateByUrl('/admin/main');//admin page
    } else {
      this.errorMessage = 'Form Data Invalid';
    }
  }

  ngOnInit() {
  }

}

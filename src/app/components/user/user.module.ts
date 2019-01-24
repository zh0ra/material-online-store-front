import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserViewComponent } from './user-view/user-view.component';
@NgModule({
    declarations: [
        UserLoginComponent,
        UserRegistrationComponent,
        UserViewComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        UserLoginComponent,
        UserRegistrationComponent,
        UserViewComponent
    ]
})
export class UserModule { }
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
//Material imports
import { AppMaterialModule } from './app.material.module';
//Components
import { routing } from './app.routing';
import { AppComponent } from './app.component';

//Services
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { PaymentService } from './services/payment.service';
import { ShippingService } from './services/shipping.service';
import { CategoryService } from './services/category.service';
import { WelcomeComponent } from './components/store/welcome/welcome.component';
import { ProductListComponent } from './components/store/product-list/product-list.component';
import { WelcomeCategorySetComponent } from './components/store/welcome-category-set/welcome-category-set.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user/user-registration/user-registration.component';
import { UserViewComponent } from './components/user/user-view/user-view.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    WelcomeCategorySetComponent,
    NavbarComponent,
    FooterComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppMaterialModule,
    NoopAnimationsModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    UserService,
    ProductService,
    CategoryService,
    PaymentService,
    ShippingService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

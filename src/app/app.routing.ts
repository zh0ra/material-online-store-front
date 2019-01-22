
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { ProductListComponent } from './components/store/product-list/product-list.component';
import { WelcomeComponent } from './components/store/welcome/welcome.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'login', component: UserLoginComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

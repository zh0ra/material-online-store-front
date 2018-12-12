
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'login', component: UserLoginComponent },
    { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

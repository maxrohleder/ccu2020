import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseUIModule } from 'firebaseui-angular';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [
    CommonModule,
    FirebaseUIModule.forFeature({ tosUrl: 'LOGIN_MODULE' }),
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}

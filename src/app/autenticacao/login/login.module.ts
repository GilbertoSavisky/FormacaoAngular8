import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatSnackBarModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { LogarComponent } from './components/logar.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';


@NgModule({
  declarations: [
    LoginComponent,
    LogarComponent],

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule
  ],

  providers: [
    LoginService
  ]
})
export class LoginModule { }

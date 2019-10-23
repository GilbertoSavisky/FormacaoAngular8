import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Login } from './models/login.model';
import { LoginService } from '../../services/login.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login-pf',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.maxLength(6)]]
    });
  }

  logar() {
    if (this.form.invalid) {       
      return;
    }
    const login: Login = this.form.value;
    this.loginService.logar(login)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          const usuarioData = JSON.parse(
            atob(data['data']['token'].split('.')[1]));
          console.log(JSON.stringify(usuarioData));
          if (usuarioData['role'] == 'ROLE_ADMIN') {
            alert('Deve redirecionar para a página de admin');
            //this.router.navigate(['/admin']);
          } else {
            alert('Deve redirecionar para a página de funcionário');
            //this.router.navigate(['/funcionario']);
          }
        },
        err => {
          console.log(JSON.stringify(err));
          let msg: string = 'Tente novamente em instantes.';
          if (err['status'] == 401) {
            msg = 'Email/senha inválido(s).'
          }
          this.snackbar.open(msg, 'Erro', {duration: 5000});
        }
      )
  }  
}

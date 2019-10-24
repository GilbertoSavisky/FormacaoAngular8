import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBarModule, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { CadastroPj } from '../../models/cadastro-pj-models';
import { CpfValidator } from 'src/app/shared/validators/cpf.validators';

@Component({
  selector: 'app-cadastrar-pj',
  templateUrl: './cadastrar-pj.component.html'
})
export class CadastrarPjComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, CpfValidator]],
      razaoSocial: ['', [Validators.required, Validators.minLength(5)]],
      cnpj: ['', [Validators.required]]
    });
  }

  cadastrarPj() {
    if (this.form.invalid) {
      return;
    }
    const cadastroPj: CadastroPj = this.form.value;
    alert(JSON.stringify(cadastroPj));
  }

}
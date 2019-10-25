import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { 
  CpfValidator, 
  CnpjValidator 
} from '../../../../shared/validators';

@Component({
  selector: 'app-cadastrar-pf',
  templateUrl: './cadastrar-pf.component.html'
})
export class CadastrarPfComponent implements OnInit {

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
  		cnpj: ['', [Validators.required, CnpjValidator]]
  	});
  }

  cadastrarPf() {
  	if (this.form.invalid) {
      return;
    }

    alert(JSON.stringify(this.form.value));

  	return false;
  }

}


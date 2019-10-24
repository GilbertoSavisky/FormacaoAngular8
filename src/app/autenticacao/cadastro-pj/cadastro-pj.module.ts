import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPjComponent } from './components/cadastrar-pj/cadastrar-pj.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CadastroPjComponent } from './components/cadastro-pj.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatButtonModule, MatListModule, MatTooltipModule, MatIconModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [
    CadastrarPjComponent,
    CadastroPjComponent

    
  ],

  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class CadastroPjModule { }

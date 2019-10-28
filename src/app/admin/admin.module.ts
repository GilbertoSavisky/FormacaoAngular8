import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatPaginatorIntl, MatPaginatorModule, MatRadioModule, MatSelectModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTooltipModule, MAT_DATE_LOCALE } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FuncionarioService, HttpUtilService, LancamentoService, PtBrMatPaginatorIntl } from '../shared';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent, AtualizacaoComponent, CadastroComponent, ConfirmarDialog, ListagemComponent } from './components';
import { AdminGuard } from './services';







@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule
  ],
  declarations: [
    ListagemComponent,
    CadastroComponent,
    AtualizacaoComponent,
    AdminComponent,
    ConfirmarDialog
  ],
  providers: [
    LancamentoService,
    HttpUtilService,
    MatPaginatorIntl,
    FuncionarioService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl },
    AdminGuard
  ],
  entryComponents: [ ConfirmarDialog ]
})
export class AdminModule { }







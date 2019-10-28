import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastroPj } from '../';
import { environment as env } from '../../../../environments/environment';


@Injectable()
export class CadastrarPjService {

  private readonly PATH: string = 'cadastrar-pj';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPj: CadastroPj): Observable<any> {
  	  return this.http.post(env.baseApiUrl + this.PATH, cadastroPj);
  }

}

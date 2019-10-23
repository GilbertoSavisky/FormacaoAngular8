import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../components/login/models/login.model';
import { Observable } from 'rxjs';
import { environment as env} from 'src/environments/environment';

@Injectable()
export class LoginService {
  private readonly PATH: string = 'auth';

  constructor(private http: HttpClient) { }

  logar(login: Login): Observable<any> {
    return this.http.post(env.baseUrl + this.PATH, login);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { User } from '../Models/user';
import { login } from '../Models/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  /**
   * Apenas para salvar ja que nao temos um servidor de verdade
   */
  private _login!: login;
  public get login(): login {
    return this._login;
  }
  public set login(v: login) {
    this._login = v;
  }

  constructor(private http: HttpClient) {}

  logar(login: login): Observable<boolean> {
    let user: login = {
        email: login.email,
        nome: login.nome,
      };
    this.login = user;
    return of(true);
  }
}

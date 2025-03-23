import { Component } from '@angular/core';
import { LoginService } from '../../../Services/login.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right',
  imports: [],
  templateUrl: './right.component.html',
  styleUrl: './right.component.scss'
})
export class RightComponent {

  _nome!: string;

  constructor(
    private _login: LoginService,
    private _router: Router
  ){

    //this._nome = this._login.login.nome;

    this._nome = 'Fernando';

  }

  configurar(){
    this._router.navigateByUrl('cadastro');
  }

}

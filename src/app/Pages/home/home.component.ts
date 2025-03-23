import { Component } from '@angular/core';
import { LoginService } from '../../Services/login.services';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';

@Component({
  selector: 'app-home',
  imports: [LeftComponent, RightComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  _nome!: string

  constructor(
    private _login: LoginService
  ){

    //this._nome = this._login.login.nome;

  }

}

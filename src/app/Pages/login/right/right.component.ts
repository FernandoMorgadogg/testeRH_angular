import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../Services/login.services';
import { NotificationService } from '../../../Services/notification.service';

@Component({
  selector: 'app-right',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './right.component.html',
  styleUrl: './right.component.scss'
})
export class RightComponent {

  formLogin!: FormGroup

  constructor(
    private _router: Router,
    private _login: LoginService,
    private _notification: NotificationService,
  ){

    this.formLogin = new FormGroup({
      nome: new FormControl('',[Validators.required, Validators.minLength(3)]),
      email: new FormControl('',[Validators.required, Validators.minLength(7), Validators.email]),
      senha: new FormControl('',[Validators.required, Validators.minLength(1)]),
      confirmacao: new FormControl('',[Validators.required, Validators.minLength(1)]),
      termo: new FormControl(false,[Validators.requiredTrue]),
    });

  }

  logar(){
    if(this.formLogin.valid){
      if(this.formLogin.get('senha')?.value == this.formLogin.get('confirmacao')?.value){
        this._login.logar(this.formLogin.value)
        this._router.navigateByUrl('home')
      }
      else{
        this._notification.showNotification('Senha ou Confirmação de senha invalidos. Tente novamente');
      }
    }
    else{
      this._notification.showNotification('Preencha o formulario');
    }

  }



}

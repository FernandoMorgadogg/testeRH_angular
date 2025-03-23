import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cnpj, cpf } from 'cpf-cnpj-validator';
import { NotificationService } from '../../Services/notification.service';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  formCadastro!: FormGroup

  constructor(
    private _router: Router,
    private _notification: NotificationService,
    ){

    this.formCadastro = new FormGroup({
        tipo: new FormControl(''),
        nome: new FormControl('',[Validators.required]),
        cnpj: new FormControl('',[Validators.required]),
        cep:new FormControl(''),
        endereco:new FormControl(''),
        bairro:new FormControl(''),
        estado:new FormControl(''),
        cidade:new FormControl(''),
        complemento:new FormControl(''),
        celular:new FormControl(''),
        nomeAdm:new FormControl('',[Validators.required]),
        cpf:new FormControl('',[Validators.required]),
        email:new FormControl('', [Validators.required, Validators.email])
    });

  }

  voltarHome(){
    this._router.navigateByUrl('home');
  }

  cadastrar(){

    if(this.formCadastro.valid){
      if(cpf.isValid(this.formCadastro.get('cpf')?.value)){
        // cadastra/edita matriz
        this._router.navigateByUrl('listagem');
      }
      else{
        this._notification.showNotification('CPF invalido. Tente novamente');
      }
    }
    else{
      this._notification.showNotification('Formulario invalido revise os dados e tente novamente');
    }

  }




}

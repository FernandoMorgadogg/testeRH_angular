import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left',
  imports: [],
  templateUrl: './left.component.html',
  styleUrl: './left.component.scss'
})
export class LeftComponent {

  constructor(
    private _router: Router,
  ){}

  voltar(){
    this._router.navigateByUrl('home');
  }

}

import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { ListagemComponent } from './Pages/listagem/listagem.component';

export const routes: Routes = [

  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'listagem', component: ListagemComponent},

  // {path:'', pathMatch:'prefix', component: LoginComponent}

];

import { LoginGuard } from './autenticacao/login.guard';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((modulo) => modulo.HomeModule),
    canLoad: [LoginGuard],
  },
  {
    path: 'animais',
    loadChildren: () =>
      import('./animais/animais.module').then((modulo) => modulo.AnimaisModule),
    canLoad: [AutenticacaoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

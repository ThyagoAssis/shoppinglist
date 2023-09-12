import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardaloginGuard } from './guarda_router/guardalogin.guard';
import { GuardarotasGuard } from './guarda_router/guardarotas.guard';

const routes: Routes = [

  //Rotas filhas 
  
  {
    path: '',
    redirectTo: 'logar',
    pathMatch: 'full'
  },
  {
    path: 'footer',
    loadChildren: () => import('./componentes/footer/footer.module').then(m => m.FooterModule ), canActivate: [GuardarotasGuard]
  },
  {
    path: 'form/:id',
    loadChildren: () => import('./page/form/form.module').then( m => m.FormPageModule), canActivate: [GuardarotasGuard]
  },
  {
    path: 'logar',
    loadChildren: () => import('./login/logar/logar.module').then( m => m.LogarPageModule), canActivate: [GuardaloginGuard]
  },


  //Rotas simples
  /* {path 'inicio', component: iniciocomponete} */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'recuperar_senha', loadChildren: './recuperar_senha/recuperar_senha.module#RecuperarSenhaPageModule' },
  { path: 'lista_contratos', loadChildren: './lista_contratos/lista_contratos.module#ListaContratosPageModule' },
  { path: 'riscos_interferencias_cgcont', loadChildren: './cgcont/riscos_interferencias_cgcont/riscos_interferencias_cgcont.module#RiscosInterferenciasCgcontPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

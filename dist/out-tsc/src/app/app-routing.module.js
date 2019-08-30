import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'recuperar_senha', loadChildren: './recuperar_senha/recuperar_senha.module#RecuperarSenhaPageModule' },
    { path: 'lista_contratos', loadChildren: './lista_contratos/lista_contratos.module#ListaContratosPageModule' },
    { path: 'riscos_interferencias_cgcont', loadChildren: './cgcont/riscos_interferencias_cgcont/riscos_interferencias_cgcont.module#RiscosInterferenciasCgcontPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
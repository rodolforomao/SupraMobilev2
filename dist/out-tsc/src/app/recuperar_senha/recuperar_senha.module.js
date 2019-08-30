import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RecuperarSenhaPage } from './recuperar_senha.page';
var routes = [
    {
        path: '',
        component: RecuperarSenhaPage
    }
];
var RecuperarSenhaPageModule = /** @class */ (function () {
    function RecuperarSenhaPageModule() {
    }
    RecuperarSenhaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RecuperarSenhaPage]
        })
    ], RecuperarSenhaPageModule);
    return RecuperarSenhaPageModule;
}());
export { RecuperarSenhaPageModule };
//# sourceMappingURL=recuperar_senha.module.js.map
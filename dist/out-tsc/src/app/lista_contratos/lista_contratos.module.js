import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListaContratosPage } from './lista_contratos.page';
var routes = [
    {
        path: '',
        component: ListaContratosPage
    }
];
var ListaContratosPageModule = /** @class */ (function () {
    function ListaContratosPageModule() {
    }
    ListaContratosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ListaContratosPage]
        })
    ], ListaContratosPageModule);
    return ListaContratosPageModule;
}());
export { ListaContratosPageModule };
//# sourceMappingURL=lista_contratos.module.js.map
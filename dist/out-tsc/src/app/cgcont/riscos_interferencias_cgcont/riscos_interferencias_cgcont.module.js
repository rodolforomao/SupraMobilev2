import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RiscosInterferenciasCgcontPage } from './riscos_interferencias_cgcont.page';
var routes = [
    {
        path: '',
        component: RiscosInterferenciasCgcontPage
    }
];
var RiscosInterferenciasCgcontPageModule = /** @class */ (function () {
    function RiscosInterferenciasCgcontPageModule() {
    }
    RiscosInterferenciasCgcontPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RiscosInterferenciasCgcontPage]
        })
    ], RiscosInterferenciasCgcontPageModule);
    return RiscosInterferenciasCgcontPageModule;
}());
export { RiscosInterferenciasCgcontPageModule };
//# sourceMappingURL=riscos_interferencias_cgcont.module.js.map
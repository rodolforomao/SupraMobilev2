import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RiscosInterferenciasCgcontPage } from './riscos_interferencias_cgcont.page';

const routes: Routes = [
  {
    path: '',
    component: RiscosInterferenciasCgcontPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RiscosInterferenciasCgcontPage]
})
export class RiscosInterferenciasCgcontPageModule {}

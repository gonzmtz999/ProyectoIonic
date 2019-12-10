import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PedidoExitosoPage } from './pedido-exitoso.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoExitosoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PedidoExitosoPage]
})
export class PedidoExitosoPageModule {}

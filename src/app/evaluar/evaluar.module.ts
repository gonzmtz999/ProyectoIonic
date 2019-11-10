import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IonicRatingModule } from "ionic4-rating";

import { EvaluarPage } from './evaluar.page';

const routes: Routes = [
  {
    path: '',
    component: EvaluarPage
  }
];

@NgModule({
  imports: [
    IonicRatingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EvaluarPage]
})
export class EvaluarPageModule {}

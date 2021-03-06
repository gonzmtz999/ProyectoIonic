import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'maps/:id ', loadChildren: './maps/maps.module#MapsPageModule' },
  { path: 'pedidos', loadChildren: './pedidos/pedidos.module#PedidosPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'evaluar', loadChildren: './evaluar/evaluar.module#EvaluarPageModule' },  { path: 'pedido-exitoso', loadChildren: './pedido-exitoso/pedido-exitoso.module#PedidoExitosoPageModule' },
  { path: 'encargo', loadChildren: './encargo/encargo.module#EncargoPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

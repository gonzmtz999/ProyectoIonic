import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
<<<<<<< HEAD
  { path: 'maps/:id ', loadChildren: './maps/maps.module#MapsPageModule' },
=======
  { path: 'pedidos', component : PedidosComponent},
  { path: 'register', component : RegisterComponent},
>>>>>>> 3cf053c2ec9042e4bb16526d3d0ccbfa41f5b131
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

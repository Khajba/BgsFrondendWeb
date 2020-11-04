import { NgModule } from '@angular/core';
import { async } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationGuard, LoginAuthGuard } from './core/authorization/auth.guard';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'account',
  //   pathMatch: 'full'
  // },
  {
    path: 'account',
    loadChildren: async () => ((await import('./features/account/account.module')).AccountModule),
    canActivate: [LoginAuthGuard]
  },
  {
    path: 'products',
    loadChildren: async () => ((await  import ('./features/products/products.module')).ProductsModule),
    canActivate:[AuthorizationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

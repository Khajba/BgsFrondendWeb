import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAuthGuard } from './core/authorization/auth.guard';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

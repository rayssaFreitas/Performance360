import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthLayoutComponent, MainLayoutComponent } from './layout';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // {
  //   path: '',
  //   component: MainLayoutComponent,
  //   loadChildren: () =>
  //     import('./layout/main-layout/main-layout.module').then(
  //       (m) => m.MainLayoutModule
  //     ),
  // },
  // {
  //   path: '',
  //   component: AuthLayoutComponent,
  //   loadChildren: () =>
  //     import('./layout/auth-layout/auth-layout.module').then(
  //       (m) => m.AuthLayoutModule
  //     ),
  // },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
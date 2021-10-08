import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/bienvenida', pathMatch: 'full' },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'producto/alta', component: AltaProductoComponent },
  { path: 'producto/lista', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

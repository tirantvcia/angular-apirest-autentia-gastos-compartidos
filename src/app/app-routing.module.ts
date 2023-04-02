import { AfegirGastoComponent } from './components/afegir-gasto/afegir-gasto.component';
import { AfegirAmicComponent } from './components/afegir-amic/afegir-amic.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'gastos' },
  { path: 'gastos', component: GastosComponent },
  { path: 'afegirAmic', component: AfegirAmicComponent },
  { path: 'afegirGasto', component: AfegirGastoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

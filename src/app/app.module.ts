import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { AfegirAmicComponent } from './components/afegir-amic/afegir-amic.component';
import { AfegirGastoComponent } from './components/afegir-gasto/afegir-gasto.component';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    AfegirAmicComponent,
    AfegirGastoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

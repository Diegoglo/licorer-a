import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';

import { OfertaDespachoScreenComponent } from './screens/oferta-despacho-screen/oferta-despacho-screen.component';
import { PiepaginaScreenComponent } from './screens/piepagina-screen/piepagina-screen.component';
import { PrincipalScreenComponent } from './screens/principal-screen/principal-screen.component';
import { CarroCompraComponent } from './components/carro-compra/carro-compra.component';
import { ProductosCarroComponent } from './components/productos-carro/productos-carro.component';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';

@NgModule({
  declarations: [
    AppComponent,
    OfertaDespachoScreenComponent,
    PiepaginaScreenComponent,
    PrincipalScreenComponent,
    CarroCompraComponent,
    ProductosCarroComponent,
    ProductoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
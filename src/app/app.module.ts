import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { ComprarComponent } from './component/comprar/comprar.component';
import { appRoutingModule} from './routin';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ComprarComponent
  ],
  imports: [
    appRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

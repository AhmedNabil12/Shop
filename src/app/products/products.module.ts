import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ComponentsComponent } from './components/components.component';
import { CardsComponent } from './components/cards/cards.component';
import { ItemsComponent } from './components/items/items.component';
import { WindowComponent } from './components/window/window.component';
import { EGPPipe } from './components/cards/egp.pipe';


@NgModule({
  declarations: [
    ComponentsComponent,
    CardsComponent,
    ItemsComponent,
    WindowComponent,
    EGPPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports:[WindowComponent]
})
export class ProductsModule { }

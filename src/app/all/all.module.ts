import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    NavbarComponent,
    MainpageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AllModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { routing }       from './home.routing';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    routing,
    ComponentsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

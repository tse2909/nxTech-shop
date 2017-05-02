import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { routing }       from './pages.routing';
import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,routing,ComponentsModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }

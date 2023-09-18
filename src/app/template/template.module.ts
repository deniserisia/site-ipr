import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    FooterComponent,
    SubHeaderComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TemplateModule { }

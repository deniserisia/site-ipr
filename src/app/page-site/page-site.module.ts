import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProgramacaoComponent } from './programacao/programacao.component';
import { HistoriaComponent } from './historia/historia.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProgramacaoComponent,
    HistoriaComponent,
    LocalizacaoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PageSiteModule { }

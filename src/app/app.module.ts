import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SLIDERComponent } from './slider/slider.component';
import { BlocosComponent } from './blocos/blocos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { MomentosComponent } from './momentos/momentos.component';
import { AniversariosComponent } from './aniversarios/aniversarios.component';
import { MinhaHistoriaComponent } from './minha-historia/minha-historia.component';
import { NovosColaboradoresComponent } from './novos-colaboradores/novos-colaboradores.component';
import { SkaInterligadaComponent } from './ska-interligada/ska-interligada.component';

@NgModule({
  declarations: [
    AppComponent,
    SLIDERComponent,
    BlocosComponent,
    NoticiasComponent,
    MomentosComponent,
    AniversariosComponent,
    MinhaHistoriaComponent,
    NovosColaboradoresComponent,
    SkaInterligadaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

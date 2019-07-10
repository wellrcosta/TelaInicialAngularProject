import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SLIDERComponent} from './slider/slider.component';
import {NoticiasComponent} from './noticias/noticias.component';
import {AniversariosComponent} from './aniversarios/aniversarios.component';
import {MinhaHistoriaComponent} from './minha-historia/minha-historia.component';
import {NovosColaboradoresComponent} from './novos-colaboradores/novos-colaboradores.component';
import {SkaInterligadaComponent} from './ska-interligada/ska-interligada.component';
import {FooterTargetComponent} from './footer-target/footer-target.component';
import {TempoComponent} from './blocos/tempo/tempo.component';
import {DolarComponent} from './blocos/dolar/dolar.component';
import {AniversarioSKAComponent} from './aniversario-ska/aniversario-ska.component';
import {Aniversarios2Component} from './aniversarios2/aniversarios2.component';
import {EventosComponent} from './blocos/eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    SLIDERComponent,
    NoticiasComponent,
    AniversariosComponent,
    MinhaHistoriaComponent,
    NovosColaboradoresComponent,
    SkaInterligadaComponent,
    FooterTargetComponent,
    TempoComponent,
    DolarComponent,
    AniversarioSKAComponent,
    Aniversarios2Component,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

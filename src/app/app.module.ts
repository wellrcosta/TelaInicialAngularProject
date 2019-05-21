import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NAVEGACAOComponent } from './navegacao/navegacao.component';
import { SLIDERComponent } from './slider/slider.component';
import { BlocosComponent } from './blocos/blocos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { MomentosComponent } from './momentos/momentos.component';

@NgModule({
  declarations: [
    AppComponent,
    NAVEGACAOComponent,
    SLIDERComponent,
    BlocosComponent,
    NoticiasComponent,
    MomentosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

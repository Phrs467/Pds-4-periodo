import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarkthemeComponent } from './darktheme/darktheme.component';
import { TelainicialComponent } from './telainicial/telainicial.component';

@NgModule({
  declarations: [
    AppComponent,
    DarkthemeComponent,
    TelainicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

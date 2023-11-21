import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PwgComponent } from './ab/pwg/pwg.component';
import { TypingComponent } from './ab/typing/typing.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { BothComponent } from './ab/both/both.component';




@NgModule({
  declarations: [
    AppComponent,
    PwgComponent,
    TypingComponent,
    NavBarComponent,
    BothComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

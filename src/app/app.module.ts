import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Compoments/navbar/navbar.component';
import { UserformComponent } from './Components/userform/userform.component';
import {HttpClientModule} from '@angular/common/http';
import { TabComponent } from './tab/tab.component';
import { AboutComponent } from './Compoments/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserformComponent,
    TabComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

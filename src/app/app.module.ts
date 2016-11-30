import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OrdersComponent} from './orders/orders.component';
import {ShowsComponent} from './shows/shows.component';
import {SideBarComponent} from './side-bar.component';
import {ActionBarComponent} from './action-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrdersComponent,
    ShowsComponent,
    SideBarComponent,
    ActionBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

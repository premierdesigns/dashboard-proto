import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from "./app-routing.module";
import { ChartsModule } from 'ng2-charts/ng2-charts';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OrdersComponent} from './orders/orders.component';
import {ShowsComponent} from './shows/shows.component';
import {SideBarComponent} from './side-bar.component';
import {ActionBarComponent} from './action-bar.component';
import { ActionBarSearchComponent } from './action-bar-search/action-bar-search.component';
import { SalesCardComponent } from './dashboard/sales-card/sales-card.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrdersComponent,
    ShowsComponent,
    SideBarComponent,
    ActionBarComponent,
    ActionBarSearchComponent,
    SalesCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

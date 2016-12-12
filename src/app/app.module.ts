import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from "./app-routing.module";
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {AgmCoreModule} from  'angular2-google-maps/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OrdersComponent} from './orders/orders.component';
import {ShowsComponent} from './shows/shows.component';
import {SideBarComponent} from './side-bar.component';
import {ActionBarComponent} from './action-bar.component';
import {ActionBarSearchComponent} from './action-bar-search/action-bar-search.component';
import {SalesCardComponent} from './dashboard/sales-card/sales-card.component';
import {FamilyTreeComponent} from './family-tree/family-tree.component';
import {JewelerProfileComponent} from './jeweler-profile/jeweler-profile.component';
import {CreativeResourcesComponent} from './creative-resources/creative-resources.component';
import {JewelerShowsComponent} from './jeweler-shows/jeweler-shows.component';
import {TrainingPageComponent} from './training-page/training-page.component';
import {OrderService} from "./orders/order.service";
import {JewelerService} from "./jeweler-profile/jeweler.service";
import {MarkdownModule} from 'angular2-markdown';
import {PromoCarouselComponent} from './dashboard/promo-carousel/promo-carousel.component';
import {BillingInfoComponent} from './jeweler-profile/billing-info/billing-info.component';
import {ShippingInfoComponent} from './jeweler-profile/shipping-info/shipping-info.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrdersComponent,
    ShowsComponent,
    SideBarComponent,
    ActionBarComponent,
    ActionBarSearchComponent,
    SalesCardComponent,
    FamilyTreeComponent,
    JewelerProfileComponent,
    CreativeResourcesComponent,
    JewelerShowsComponent,
    TrainingPageComponent,
    PromoCarouselComponent,
    BillingInfoComponent,
    ShippingInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBX7FrVuQ_sNxJ59mojjgHiVmlri7viEBg'
    }),
    MarkdownModule
  ],
  providers: [
    OrderService,
    JewelerService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


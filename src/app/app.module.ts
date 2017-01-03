import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, BaseRequestOptions, Http} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from "./app-routing.module";
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {AgmCoreModule} from  'angular2-google-maps/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OrdersComponent} from './orders/orders.component';
import {ShowsComponent} from './shows/shows.component';
import {SideBarComponent} from './side-bar.component';
import {ActionBarComponent} from './action-bar/action-bar.component';
import {ActionBarSearchComponent} from './action-bar-search/action-bar-search.component';
import {SalesCardComponent} from './dashboard/sales-card/sales-card.component';
import {FamilyTreeComponent} from './family-tree/family-tree.component';
import {JewelerProfileComponent} from './jeweler-profile/jeweler-profile.component';
import {CreativeResourcesComponent} from './creative-resources/creative-resources.component';
import {JewelerShowsComponent} from './jeweler-shows/jeweler-shows.component';
import {TrainingPageComponent} from './training-page/training-page.component';
import {OrderService} from "./orders/order.service";
import {ShowsService} from "./shows/shows.service";
import {JewelerService} from "./jeweler-profile/jeweler.service";
import {MarkdownModule} from 'angular2-markdown';
import {PromoCarouselComponent} from './dashboard/promo-carousel/promo-carousel.component';
import {BillingInfoComponent} from './jeweler-profile/billing-info/billing-info.component';
import {ShippingInfoComponent} from './jeweler-profile/shipping-info/shipping-info.component';
import {SidebarColorDirective} from './sidebar-color.directive';
import {UiColors} from "./uiColors.service";
import {EventsComponent} from './events/events.component';
import {ResourcesService} from "./creative-resources/resources.service";
import {JewelerAccountComponent} from './jeweler-account/jeweler-account.component';
import {SettingsComponent} from './settings/settings.component';
import {StarWarsComponent} from './star-wars/star-wars.component';
import {StarWarsService} from "./star-wars/star-wars.service";
import {AccountService} from "./jeweler-account/account.service";
import {SettingsService} from "./settings/settings.service";
import {RewardCardComponent} from './jeweler-account/reward-card/reward-card.component';
import {ContractInfoComponent} from './jeweler-account/contract-info/contract-info.component';
import {PersonalWebpageComponent} from './jeweler-account/personal-webpage/personal-webpage.component';
import {PersonalEcommerceComponent} from './jeweler-account/personal-ecommerce/personal-ecommerce.component';
import {ContractInfoService} from "./jeweler-account/contract-info/contract-info.service";
import {ActionIconsComponent} from './orders/action-icons/action-icons.component';
import {OrderStatusDirective} from './orders/order-status.directive';
import {PromotionsComponent} from './promotions/promotions.component';
import {PromotionsService} from "./promotions/promotions-service.service";
import { CommunicationsComponent } from './settings/communications/communications.component';
import {MockBackend} from "@angular/http/testing";


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
    ShippingInfoComponent,
    SidebarColorDirective,
    EventsComponent,
    JewelerAccountComponent,
    SettingsComponent,
    StarWarsComponent,
    ActionBarComponent,
    RewardCardComponent,
    ContractInfoComponent,
    PersonalWebpageComponent,
    PersonalEcommerceComponent,
    ActionIconsComponent,
    OrderStatusDirective,
    PromotionsComponent,
    CommunicationsComponent
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
    Title,
    ShowsService,
    UiColors,
    ResourcesService,
    StarWarsService,
    AccountService,
    SettingsService,
    ContractInfoService,
    PromotionsService,
    BaseRequestOptions,
    MockBackend,
    {
      provide: Http,
      deps: [MockBackend, BaseRequestOptions],
      useFactory: (backend, options) => { return new Http(backend, options); }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


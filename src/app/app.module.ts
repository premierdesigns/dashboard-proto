import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from "./app-routing.module";
import {ChartsModule} from 'ng2-charts';
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
import {CommunicationsComponent} from './settings/communications/communications.component';
import {MobileSideBarComponent} from './mobile-side-bar/mobile-side-bar.component';
import {CurrentMonthSalesComponent} from './dashboard/current-month-sales/current-month-sales.component';
import {ShowsThisMonthComponent} from './events/shows-this-month/shows-this-month.component';
import {MyFamilyComponent} from './family-tree/my-family/my-family.component';
import {DataCardsComponent} from './family-tree/data-cards/data-cards.component';
import {QuickActionIconsComponent} from './action-bar/quick-action-icons/quick-action-icons.component';
import {OrdersStatsComponent} from './orders/orders-stats/orders-stats.component';
import {CardIconsComponent} from './dashboard/card-icons/card-icons.component';
import {AccordianComponent} from './orders/orders-accordion/accordian/accordian.component';
import {AccordianTabComponent} from './orders/orders-accordion/accordian-tab/accordian-tab.component';


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
    CommunicationsComponent,
    MobileSideBarComponent,
    CurrentMonthSalesComponent,
    ShowsThisMonthComponent,
    MyFamilyComponent,
    DataCardsComponent,
    ActionIconsComponent,
    QuickActionIconsComponent,
    OrdersStatsComponent,
    CardIconsComponent,
    AccordianComponent,
    AccordianTabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMgLxIhSj5lKlJrvXSz-HEqQ23HH1-cFo'
    }),
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
    ContractInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


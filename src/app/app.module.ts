import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, BaseRequestOptions, Http} from '@angular/http';
import {NgbModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
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
import {OrderFilterPipe} from './orders/order-filter.pipe';
import {CommunicationsComponent} from "./settings/communications/communications.component";
import {EventCalendarComponent} from "./events/event-calendar/event-calendar.component";
import {CalendarModule} from 'angular-calendar';
import {BookingComponent} from "./training-page/booking/booking.component";
import {InspirationComponent} from "./training-page/inspiration/inspiration.component";
import {JewelryShowBasicsComponent} from "./training-page/jewelry-show-basics/jewelry-show-basics.component";
import {MarketingToolsComponent} from "./training-page/marketing-tools/marketing-tools.component";
import {MyPremierAwardsComponent} from "./training-page/my-premier-awards/my-premier-awards.component";
import {PremierLifeComponent} from "./training-page/premier-life/premier-life.component";
import {ProductVersatilityComponent} from "./training-page/product-versatility/product-versatility.component";
import {RetailingComponent} from "./training-page/retailing/retailing.component";
import {SponsoringComponent} from "./training-page/sponsoring/sponsoring.component";
import {ShareToSocialComponent} from "./shared/share-to-social/share-to-social.component";
import {DashboardCardComponent} from "./dashboard/dashboard-card/dashboard-card.component";
import {ModalDirective} from "./shared/modal.directive";
import {OrderDetailComponent} from "./orders/order-detail/order-detail.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";

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
    AccordianTabComponent,
    OrderFilterPipe,
    CommunicationsComponent,
    EventCalendarComponent,
    BookingComponent,
    InspirationComponent,
    JewelryShowBasicsComponent,
    MarketingToolsComponent,
    MyPremierAwardsComponent,
    PremierLifeComponent,
    ProductVersatilityComponent,
    RetailingComponent,
    SponsoringComponent,
    ShareToSocialComponent,
    DashboardCardComponent,
    ModalDirective,
    OrderDetailComponent,
    NotificationsComponent,
    ContactUsComponent
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
    CalendarModule.forRoot(),
    NgbModalModule.forRoot()
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
    // ContractInfoService,
    // BaseRequestOptions,
    // {
    //   provide: Http,
    //   deps: [BaseRequestOptions],
    //   useFactory: (backend, options) => { return new Http(backend, options); }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


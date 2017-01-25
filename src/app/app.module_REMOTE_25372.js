"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var app_routing_module_1 = require("./app-routing.module");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var core_2 = require("angular2-google-maps/core");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var orders_component_1 = require("./orders/orders.component");
var shows_component_1 = require("./shows/shows.component");
var side_bar_component_1 = require("./side-bar.component");
var action_bar_component_1 = require("./action-bar/action-bar.component");
var action_bar_search_component_1 = require("./action-bar-search/action-bar-search.component");
var sales_card_component_1 = require("./dashboard/sales-card/sales-card.component");
var family_tree_component_1 = require("./family-tree/family-tree.component");
var jeweler_profile_component_1 = require("./jeweler-profile/jeweler-profile.component");
var creative_resources_component_1 = require("./creative-resources/creative-resources.component");
var jeweler_shows_component_1 = require("./jeweler-shows/jeweler-shows.component");
var training_page_component_1 = require("./training-page/training-page.component");
var order_service_1 = require("./orders/order.service");
var shows_service_1 = require("./shows/shows.service");
var jeweler_service_1 = require("./jeweler-profile/jeweler.service");
var angular2_markdown_1 = require("angular2-markdown");
var promo_carousel_component_1 = require("./dashboard/promo-carousel/promo-carousel.component");
var billing_info_component_1 = require("./jeweler-profile/billing-info/billing-info.component");
var shipping_info_component_1 = require("./jeweler-profile/shipping-info/shipping-info.component");
var sidebar_color_directive_1 = require("./sidebar-color.directive");
var uiColors_service_1 = require("./uiColors.service");
var events_component_1 = require("./events/events.component");
var resources_service_1 = require("./creative-resources/resources.service");
var jeweler_account_component_1 = require("./jeweler-account/jeweler-account.component");
var settings_component_1 = require("./settings/settings.component");
var star_wars_component_1 = require("./star-wars/star-wars.component");
var star_wars_service_1 = require("./star-wars/star-wars.service");
var account_service_1 = require("./jeweler-account/account.service");
var settings_service_1 = require("./settings/settings.service");
var reward_card_component_1 = require("./jeweler-account/reward-card/reward-card.component");
var contract_info_component_1 = require("./jeweler-account/contract-info/contract-info.component");
var personal_webpage_component_1 = require("./jeweler-account/personal-webpage/personal-webpage.component");
var personal_ecommerce_component_1 = require("./jeweler-account/personal-ecommerce/personal-ecommerce.component");
var contract_info_service_1 = require("./jeweler-account/contract-info/contract-info.service");
var action_icons_component_1 = require("./orders/action-icons/action-icons.component");
var order_status_directive_1 = require("./orders/order-status.directive");
var promotions_component_1 = require("./promotions/promotions.component");
var promotions_service_service_1 = require("./promotions/promotions-service.service");
var communications_component_1 = require("./settings/communications/communications.component");
var testing_1 = require("@angular/http/testing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            orders_component_1.OrdersComponent,
            shows_component_1.ShowsComponent,
            side_bar_component_1.SideBarComponent,
            action_bar_component_1.ActionBarComponent,
            action_bar_search_component_1.ActionBarSearchComponent,
            sales_card_component_1.SalesCardComponent,
            family_tree_component_1.FamilyTreeComponent,
            jeweler_profile_component_1.JewelerProfileComponent,
            creative_resources_component_1.CreativeResourcesComponent,
            jeweler_shows_component_1.JewelerShowsComponent,
            training_page_component_1.TrainingPageComponent,
            promo_carousel_component_1.PromoCarouselComponent,
            billing_info_component_1.BillingInfoComponent,
            shipping_info_component_1.ShippingInfoComponent,
            sidebar_color_directive_1.SidebarColorDirective,
            events_component_1.EventsComponent,
            jeweler_account_component_1.JewelerAccountComponent,
            settings_component_1.SettingsComponent,
            star_wars_component_1.StarWarsComponent,
            action_bar_component_1.ActionBarComponent,
            reward_card_component_1.RewardCardComponent,
            contract_info_component_1.ContractInfoComponent,
            personal_webpage_component_1.PersonalWebpageComponent,
            personal_ecommerce_component_1.PersonalEcommerceComponent,
            action_icons_component_1.ActionIconsComponent,
            order_status_directive_1.OrderStatusDirective,
            promotions_component_1.PromotionsComponent,
            communications_component_1.CommunicationsComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            ng2_charts_1.ChartsModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyBX7FrVuQ_sNxJ59mojjgHiVmlri7viEBg'
            }),
            angular2_markdown_1.MarkdownModule
        ],
        providers: [
            order_service_1.OrderService,
            jeweler_service_1.JewelerService,
            platform_browser_1.Title,
            shows_service_1.ShowsService,
            uiColors_service_1.UiColors,
            resources_service_1.ResourcesService,
            star_wars_service_1.StarWarsService,
            account_service_1.AccountService,
            settings_service_1.SettingsService,
            contract_info_service_1.ContractInfoService,
            promotions_service_service_1.PromotionsService,
            http_1.BaseRequestOptions,
            testing_1.MockBackend,
            {
                provide: http_1.Http,
                deps: [testing_1.MockBackend, http_1.BaseRequestOptions],
                useFactory: function (backend, options) { return new http_1.Http(backend, options); }
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

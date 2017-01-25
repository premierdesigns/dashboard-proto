"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var orders_component_1 = require("./orders/orders.component");
var shows_component_1 = require("./shows/shows.component");
var jeweler_profile_component_1 = require("./jeweler-profile/jeweler-profile.component");
var family_tree_component_1 = require("./family-tree/family-tree.component");
var creative_resources_component_1 = require("./creative-resources/creative-resources.component");
var training_page_component_1 = require("./training-page/training-page.component");
var events_component_1 = require("./events/events.component");
var jeweler_account_component_1 = require("./jeweler-account/jeweler-account.component");
var settings_component_1 = require("./settings/settings.component");
var star_wars_component_1 = require("./star-wars/star-wars.component");
// This is where we setup our routes!
var APP_ROUTES = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'orders', component: orders_component_1.OrdersComponent },
    { path: 'shows', component: shows_component_1.ShowsComponent },
    { path: 'profile', component: jeweler_profile_component_1.JewelerProfileComponent },
    { path: 'familytree', component: family_tree_component_1.FamilyTreeComponent },
    { path: 'resources', component: creative_resources_component_1.CreativeResourcesComponent },
    { path: 'training', component: training_page_component_1.TrainingPageComponent },
    { path: 'events', component: events_component_1.EventsComponent },
    { path: 'account', component: jeweler_account_component_1.JewelerAccountComponent },
    { path: 'settings', component: settings_component_1.SettingsComponent },
    { path: 'starwars', component: star_wars_component_1.StarWarsComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(APP_ROUTES)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;

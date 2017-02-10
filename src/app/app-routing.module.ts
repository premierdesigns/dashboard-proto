import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {OrdersComponent} from "./orders/orders.component";
import {ShowsComponent} from "./shows/shows.component";
import {JewelerProfileComponent} from "./jeweler-profile/jeweler-profile.component";
import {FamilyTreeComponent} from "./family-tree/family-tree.component";
import {CreativeResourcesComponent} from "./creative-resources/creative-resources.component";
import {TrainingPageComponent} from "./training-page/training-page.component";
import {EventsComponent} from "./events/events.component";
import {JewelerAccountComponent} from "./jeweler-account/jeweler-account.component";
import {SettingsComponent} from "./settings/settings.component";
import {StarWarsComponent} from "./star-wars/star-wars.component";
import {OrderDetailComponent} from "./orders/order-detail/order-detail.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";

// This is where we setup our routes!
const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'shows', component: ShowsComponent },
  { path: 'profile', component: JewelerProfileComponent },
  { path: 'familytree', component: FamilyTreeComponent },
  { path: 'resources', component: CreativeResourcesComponent },
  { path: 'training', component: TrainingPageComponent },
  { path: 'events', component: EventsComponent},
  { path: 'account', component: JewelerAccountComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'starwars', component: StarWarsComponent },
  { path: 'orders/orderdetail', component: OrderDetailComponent},
  { path: 'contactus', component: ContactUsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}


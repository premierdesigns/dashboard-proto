import {Component, ViewChild} from '@angular/core';
import {UiColors} from "./uiColors.service";
import {SideBarComponent} from "./side-bar.component";

@Component({
  selector: 'pd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'pd works!';
  theme = {};
  constructor(private uiColors: UiColors) {
    this.theme = uiColors.getTheme();
  }
}

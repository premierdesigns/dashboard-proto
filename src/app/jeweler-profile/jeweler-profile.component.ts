import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {JewelerService} from "./jeweler.service";
import {FormGroup} from "@angular/forms";
import {Jeweler} from "./jeweler";
import {Subscription} from "rxjs";

@Component({
  selector: 'pd-jeweler-profile',
  templateUrl: './jeweler-profile.component.html',
  styleUrls: ['./jeweler-profile.component.less']
})
export class JewelerProfileComponent implements OnInit, OnDestroy {
  title = 'Profile';
  jeweler: Jeweler;
  private isEdit = true;
  private subscriptions: Subscription[] = [];

  constructor(private jewelerService: JewelerService) { }

  ngOnInit() {
    this.jeweler = this.jewelerService.getJeweler(0) || this.jewelerService.createEmptyJeweler();
  }

  onSubmit(jeweler: Jeweler) {
    if (!this.isEdit) {
      this.jewelerService.createJeweler(jeweler);
    }
    else {
      this.jewelerService.updateJeweler(jeweler);
    }

    //this.navigateBack();
  }

  ngOnDestroy() {
    // unsubscribe from all of our subscriptions or we will have memory leaks
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}

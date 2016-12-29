import { Component, OnInit } from '@angular/core';
import { ContractInfoService } from './contract-info.service';

@Component({
  selector: 'pd-contract-info',
  templateUrl: './contract-info.component.html',
  styleUrls: ['./contract-info.component.less'],
  providers: [ContractInfoService]
})
export class ContractInfoComponent implements OnInit {
  public people;

  constructor(private _contractInfoService: ContractInfoService) {
    this.people = this._contractInfoService.getPeople();
  }

  ngOnInit() {
    // this._contractInfoService.getPeople()
    //   .subscribe(
    //     data => this.people = JSON.stringify(data),
    //     error => alert('error getting Swapi data'),
    //     () => console.log(this.people)
    //   );
  }

}

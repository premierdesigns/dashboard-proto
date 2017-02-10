import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[pdModal]',
  exportAs: 'pdModal',
  host: {
    '(click)': 'displayMessage()'
  }
})
export class ModalDirective {
  @Input() message: string;

  constructor(_elementRef: ElementRef) {
    console.log(_elementRef);
  }

  displayMessage(): void {
    alert(this.message);
  }

}

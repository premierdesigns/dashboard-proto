import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[highlightColor]'
})
export class SidebarColorDirective {
  private _defaultColor = 'blue';

  constructor(private el: ElementRef) { }

  @Input('highlightColor') hightlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.hightlightColor || this._defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }

}

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: false
})
export class ColorDirective {

  constructor(private eL : ElementRef) { }

  @HostListener('click')
  onClick(){
    this.eL.nativeElement.style.backgroundColor="red"
  }
  @HostListener('dblclick')
  onDbClick(){
    this.eL.nativeElement.style.backgroundColor="ocean"
  }
}

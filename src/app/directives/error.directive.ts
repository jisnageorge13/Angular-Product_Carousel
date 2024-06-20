import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appError]',
  standalone: true
})
export class ErrorDirective {

  constructor(private el: ElementRef) { }//llr to document.getElementById

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.classList.add("red");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.classList.remove("red");
  }
}

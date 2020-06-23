import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
//   constructor(private elementRef: ElementRef) {
//   }
constructor(private elementRef: ElementRef, private renderer:Renderer2) {
}

  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
  }

  @HostListener('mouseenter') mouseover(eventDate:Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','silver');
  }
  @HostListener('mouseleave') mousleave(eventDate:Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
  }
}

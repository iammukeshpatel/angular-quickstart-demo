import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Input
} from "@angular/core";

@Directive({
  selector: "[ellipsis]"
})
export class EllipsisDirective implements OnInit {
  @Input() ellipsis: number;

  content: String;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.content = this.el.nativeElement.innerText;
    this.el.nativeElement.innerHTML = `${this.content.substring(0, this.ellipsis || 10)}...`;

    this.el.nativeElement.title = this.content;
  }

  // @HostListener("mouseenter")
  // onMouseEnter() {
  //   // this.el.nativeElement.innerHTML = this.content;
  //   // this.el.nativeElement.title = this.content;
  // }

  // @HostListener("mouseleave")
  // onMouseLeave() {
  //   // this.ngOnInit();
  // }
}

import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-side-nav',
  templateUrl: './mobile-side-nav.component.html',
  styleUrls: ['./mobile-side-nav.component.scss']
})
export class MobileSideNavComponent implements OnInit {

  @Input() showSidebarNav!:boolean;
  
  
  // @HostListener('document:click', ['$event'])
  // clickout(event:any) {
  //   if(this.eRef.nativeElement.contains(event.target)) {
  //   } else {
  //     this.showSidebarNav = ! this.showSidebarNav
  //   }
  // }
  
  toggleShow() { this.showSidebarNav = ! this.showSidebarNav; }
  constructor(
    private eRef: ElementRef,
  ) { }


  ngOnInit(): void {
  }

}

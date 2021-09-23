import { Component, ElementRef, HostListener, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonFacade } from '../../facades/common.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter<boolean>();

  isShown: boolean = false;
  showDrop =false;
  showSidebarNav!:boolean;

  @HostListener('document:click', ['$event'])
  clickout(event:any) {
    // console.log('event')
    if(this.eRef.nativeElement.contains(event.target)) {
    } else {
      this.showDrop = false;
      this.isShown =false;
    }
  }

  toggleShow() { this.isShown = ! this.isShown; }

  toggleClickSideNav() {
    this.toggleSideNav.emit(true)
  }

  constructor(
    private eRef: ElementRef,
    private commonFacade: CommonFacade
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.setItem('ADMIN_TOKEN',undefined);
    this.commonFacade.navigate(['/login']);
  }

}

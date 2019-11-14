import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private title: string = 'blogManager';
  private openSideBar: boolean = true;
  
  @Output() isOpenSideBar = new EventEmitter<boolean>();

  toggleSideBar() {
    this.openSideBar = !this.openSideBar;
    this.isOpenSideBar.emit(this.openSideBar);
  }

 
    


}

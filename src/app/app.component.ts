import { Component, HostListener } from '@angular/core';
import { ContextMenuModel } from './Interfaces/context-menu-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'context-menu';

  isDisplayContextMenu: boolean;
  rightClickMenuItems: Array<ContextMenuModel> = [];
  rightClickMenuPositionX: number;
  rightClickMenuPositionY: number;

  displayContextMenu(event) {

    this.isDisplayContextMenu = true;

    this.rightClickMenuItems = [
      {
        menuText: 'Refactor',
        menuEvent: 'Handle refactor',
      },
      {
        menuText: 'Format',
        menuEvent: 'Handle format',
      },
    ];

    this.rightClickMenuPositionX = event.clientX;
    this.rightClickMenuPositionY = event.clientY;

  }

  getRightClickMenuStyle() {
    return {
      position: 'fixed',
      left: `${this.rightClickMenuPositionX}px`,
      top: `${this.rightClickMenuPositionY}px`
    }
  }

  handleMenuItemClick(event) {
    switch (event.data) {
      case this.rightClickMenuItems[0].menuEvent:
           console.log('To handle refactor');
           break;
      case this.rightClickMenuItems[1].menuEvent:
          console.log('To handle formatting');
    }
  }

  @HostListener('document:click')
  documentClick(): void {
    this.isDisplayContextMenu = false;
  }

}

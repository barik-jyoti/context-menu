import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ContextMenuModel } from "../Interfaces/context-menu-model";

@Component({
  selector: "app-context-menu",
  templateUrl: "./context-menu.component.html",
  styleUrls: ["./context-menu.component.css"],
})
export class ContextMenuComponent {
  @Input()
  contextMenuItems: Array<ContextMenuModel>;

  @Output()
  onContextMenuItemClick: EventEmitter<any> = new EventEmitter<any>();

  onContextMenuClick(event, data): any {
    this.onContextMenuItemClick.emit({
      event,
      data,
    });
  }
}

import {Component, ElementRef, Input, ViewChild} from '@angular/core';

import {SidenavItem} from "../../types/sidenav-item.interface";

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent {
  @Input() value?: SidenavItem;
  @ViewChild('dropdown') dropdown?: ElementRef;

  toggleDropdown() {
    if (!Array.isArray(this.value?.children) || this.value?.children.length === 0) {
      return;
    }
    (this.dropdown?.nativeElement as HTMLElement).classList.toggle(('hidden'));
  }
}

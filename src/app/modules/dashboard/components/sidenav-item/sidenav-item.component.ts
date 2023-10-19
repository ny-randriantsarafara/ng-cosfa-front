import {Component, Input} from '@angular/core';
import {SidenavItem} from "../sidenav/sidenav.component";

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent {
  @Input() value?: SidenavItem;
}

import { Component, OnInit } from '@angular/core';
import { SidenavItem } from '../../types/sidenav-item.class';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  topSidenavItems: SidenavItem[] = [];
  bottomSidenavItems: SidenavItem[] = [];

  async ngOnInit(): Promise<void> {
    try {
      const topSidenavItems = await fetch(
        '/assets/config/top-sidenav.json',
      ).then((response) => response.json());
      const bottomSidenavItems = await fetch(
        '/assets/config/bottom-sidenav.json',
      ).then((response) => response.json());

      this.topSidenavItems = this.parseSidenavItems(topSidenavItems);
      this.bottomSidenavItems = this.parseSidenavItems(bottomSidenavItems);
    } catch (e) {
      console.error('Could not retrieve sidenav configuration');
    }
  }

  parseSidenavItems(items: unknown[]): SidenavItem[] {
    if (
      typeof items === 'undefined' ||
      !Array.isArray(items) ||
      items.length === 0
    ) {
      console.log('Sidenav items config is empty or undefined');
      return [];
    }

    return items.map(
      (item: any) =>
        new SidenavItem(
          item.label,
          item.icon,
          item.badge,
          item.routerLink,
          item.children,
        ),
    );
  }
}

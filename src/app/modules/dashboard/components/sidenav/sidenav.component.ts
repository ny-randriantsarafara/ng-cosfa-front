import { Component, OnInit } from '@angular/core';

export class SidenavItem {
  constructor(
    public label: string,
    public icon?: string,
    public badge?: string | number,
    public routerLink?: string[],
    public children?: SidenavItem[],
  ) {}
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  items: SidenavItem[] = [];

  async ngOnInit(): Promise<void> {
    try {
      const sidenavItems = await fetch(
        '/assets/config/sidenav-items.json',
      ).then((response) => response.json());
      this.items = this.parseSidenavItems(sidenavItems);
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

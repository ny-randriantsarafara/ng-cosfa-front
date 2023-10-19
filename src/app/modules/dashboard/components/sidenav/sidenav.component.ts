import { Component } from '@angular/core';

export interface SidenavItem {
  label: string;
  icon?: unknown;
  hasBadge?: boolean;
  badgeValue?: string | number;
  routerLink?: string[];
  children?: SidenavItem[];
}

const ITEMS: SidenavItem[] = [
  {
    icon: `
          <svg
            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
          </svg>
    `,
    label: 'Overview',
    routerLink: ['/'],
  },
  {
    icon: `
          <svg
            class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
              clip-rule="evenodd"
            ></path>
          </svg>
    `,
    label: 'Pages',
    children: [
      {
        label: 'Settings',
        routerLink: ['/'],
      },
      {
        label: 'Kanban',
        routerLink: ['/'],
      },
      {
        label: 'Calendar',
        routerLink: ['/'],
      },
    ],
  },
  {
    icon: '',
    label: 'Messages',
    hasBadge: true,
    badgeValue: 4,
  },
];

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  items: SidenavItem[] = ITEMS;
}

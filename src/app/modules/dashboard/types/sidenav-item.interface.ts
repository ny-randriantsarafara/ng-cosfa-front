export interface SidenavItem {
  label: string;
  icon?: string;
  badge?: string | number;
  routerLink?: string[];
  children?: SidenavItem[];


}

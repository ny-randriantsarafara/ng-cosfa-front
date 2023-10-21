export class SidenavItem {
  constructor(
    public label: string,
    public icon?: string,
    public badge?: string | number,
    public routerLink?: string[],
    public children?: SidenavItem[],
  ) {}
}
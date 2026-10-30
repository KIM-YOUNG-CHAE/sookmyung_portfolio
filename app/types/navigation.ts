export interface SubMenuItem {
  title: string;
  path: string;
}

export interface NavItem {
  title: string;
  path: string;
  subMenus?: SubMenuItem[];
}
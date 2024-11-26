export interface MenuItem {
  label: string;
  link: string;
  submenu?: MenuItem[];
}

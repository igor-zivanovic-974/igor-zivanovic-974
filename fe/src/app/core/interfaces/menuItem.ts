export interface MenuItem {
  name: string;
  link: string;
  isDropdown?: boolean;
  values?: MenuItem[];
}

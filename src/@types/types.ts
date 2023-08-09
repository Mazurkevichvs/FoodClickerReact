export interface MenuItemType {
  id: string;
  name: string;
  price: number;
}

export interface CafeItem {
  id: string;
  name: string;
  pic: string;
  description: string;
  menu: MenuItemType[];
  postcode: string;
  adress: string;
  openhours:string;
}

export interface OrderItem {
  cafeName: string;
  menuItemName: string;
  price: number;
  count: number;
  id: string;
  itemSum: number;
}

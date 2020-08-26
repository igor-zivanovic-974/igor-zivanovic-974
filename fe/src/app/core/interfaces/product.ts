export interface Product {
  id: number;
  name: string;
  alias: string;
  description: string;
  groupId: number;
  groupName?: string;
  categoryId: number;
  categoryName?: string;
  subcategoryId: number;
  subcategoryName?: string;
  price: number;
  barcode: string;
  dimension: string;
  weight: string;
  active: boolean;
}

import { Category } from '../interfaces/category';
import { Subcategory } from '../interfaces/subcategory';
import { Product } from '../interfaces/product';

export class SelectedGroup {
    id: number;
    name: string;
    categories: any[] = [];
}

export class SelectedCategory {
    id: number;
    name: string;
    subcategories: any[];
}

export class SelectedSubcategory {
    id: number;
    name: string;
    products?: Product[];

}

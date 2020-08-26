import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService, IdName } from '@app/products/products.service';
import { Breadcrumb } from '@app/core/interfaces/breadcrumb';
import { Product } from '@app/core/interfaces/product';
import { Group } from '@app/core/models/group';
import { Category } from '@app/core/interfaces/category';
import { Subcategory } from '@app/core/interfaces/subcategory';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SelectedSubcategory, SelectedCategory } from '@app/core/models/selectedGroup';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  isLoading: boolean;
  breadcrumbs: Breadcrumb[] = [];
  products: Product[] = [];
  groups: Group[];
  categories: Category[];
  subcategories: Subcategory[];
  activeGroupId: string | number;
  activeCategoryId: string | number;
  activeSubcategoryId: number;
  groupId: number;
  categoryId: string | number;
  subCategoryId: string | number;
  selectedGroup: Group = new Group();
  selectedCategories: SelectedCategory[] = [];
  selectedSubcategories: SelectedSubcategory[] = [];
  activeCategoryIndex: number;
  activeSubcategoryIndex: number;
  // bsModalRef: BsModalRef;
  unsubscribe = new Subject<void>();

  constructor(private _productsService: ProductsService, private _route: ActivatedRoute,
    // private _modalService: BsModalService
  ) {
    this._route.paramMap.subscribe((params: ParamMap) => {
      // debugger;
      this.groupId = +params.get('groupId');
    });
  }

  ngOnInit() {
    this.isLoading = true;
    this.getGroups();
    this.breadcrumbs = this._productsService.breadcrumbs;
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }

  getGroups() {
    this._productsService.getGroups().pipe(takeUntil(this.unsubscribe)).subscribe((items: Group[]) => {
      this.groups = items;
      this.selectedGroup = this.groups.find((g: Group) => g.id === this.groupId);
      console.log('GROUP: ', this.selectedGroup);
      // console.log('groups: ', this.groups);
      this.getCategories();
    })
  }

  getCategories() {
    this._productsService.getCategories().subscribe((items: Category[]) => {
      this.categories = items;
      // console.log('categories: ', this.categories);
      this.getSubategories();
    })
  }

  getSubategories() {
    this._productsService.getSubcategories().subscribe((items: Subcategory[]) => {
      this.subcategories = items;
      this.createStructure();
    })
  }

  createStructure() {
    this.categories.forEach((c: Category) => {
      if (c.groupId === this.groupId) {
        const sCat: SelectedCategory = { id: c.id, name: c.name, subcategories: [] };
        this.subcategories.forEach((sc: Subcategory) => {
          if (sc.categoryId === c.id) {
            const sSubCat: SelectedSubcategory = { id: sc.id, name: sc.name };
            sCat.subcategories.push({ id: sc.id, name: sc.name });
            this.selectedSubcategories.push(sSubCat);
          }
        });
        this.selectedCategories.push(sCat);

      }
    });
    console.log('SelectedCategories: ', this.selectedCategories);
    console.log('SelectedSubategories: ', this.selectedSubcategories);

    this.activeCategoryId = this.selectedCategories[0].id;
    this.activeCategoryIndex = 0;
    this.activeSubcategoryId = this.selectedSubcategories[0].id;
    this.activeSubcategoryIndex = 0;
    this.getProducts();
  }

  getProducts() {
    this.products = [];
    this._productsService.getProducts(this.activeSubcategoryId).subscribe((products: Product[]) => {
      this.products = products;
      console.log('PRODUCTS: ', this.products);
      this.isLoading = false;
    });

  }

  setActiveGroup(groupId: string | number) {
    this.activeGroupId = groupId;
  }

  setActiveCategory(catId: string | number, index: number) {
    this.activeCategoryId = catId;
    this.activeCategoryIndex = index;
  }

  setActiveSubcategory(subcatId: number, index: number) {
    this.activeSubcategoryId = subcatId;
    this.activeSubcategoryIndex = index;
    this.getProducts();
  }

  openProductModal(productId: number) {
    // const initialState = {
    //   list: [
    //     'Open a modal with component',
    //     'Pass your data',
    //     'Do something else',
    //     '...'
    //   ],
    //   title: 'Modal with component'
    // };
    // this.bsModalRef = this._modalService.show(ProductDetailsComponent, {}); // initialState
    // this.bsModalRef.content.closeBtnName = 'Close';
  }


}

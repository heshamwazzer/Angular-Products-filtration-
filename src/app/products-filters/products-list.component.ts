import {Component, OnInit} from '@angular/core';
import {ProductPlant, ProductsFiltersQuery, ProductsFiltersService} from './state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: `./products-list.component.html`
})
export class ProductsListComponent implements OnInit {
  products$: Observable<ProductPlant[]>;
  loading$: Observable<boolean>;

  constructor(private productsService: ProductsFiltersService, private productsQuery: ProductsFiltersQuery) {
  }

  ngOnInit() {
    this.productsService.get().subscribe();
    this.loading$ = this.productsQuery.selectLoading();

    this.products$ = this.productsService.selectAll();
  }


}

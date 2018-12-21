import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private producList: Product[] = new Array<Product>();
  private categoryList: Category[] = new Array<Category>();

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.getCategoryList().subscribe(
      data => this.categoryList = data
    );
    this.productService.getProductList().subscribe(
      data => this.producList = data
    );
  }
}

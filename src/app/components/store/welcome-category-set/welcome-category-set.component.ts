import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-welcome-category-set',
  templateUrl: './welcome-category-set.component.html',
  styleUrls: ['./welcome-category-set.component.css']
})
export class WelcomeCategorySetComponent implements OnInit {

  private categoryList: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategoryList().subscribe(
      dataList => this.categoryList = dataList
    );
  }

}

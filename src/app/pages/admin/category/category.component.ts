import { Component } from '@angular/core';
import { CardComponent } from '@app/components/card/card.component';
import { SearchBarComponent } from '@app/components/search-bar/search-bar.component';
import { Category } from '@app/models/category';
import { CategoryService } from '@app/services/category.service';

@Component({
  selector: 'app-category',
  imports: [SearchBarComponent, CardComponent],
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  constructor(private _categoryService: CategoryService) {}
  // Search bar
  searchValue: string = '';
  placeholder: string = 'Search by name';
  // Category card
  public categories: Category[] = [];
  public isAdmin: boolean = true;
  public categoryFields = [
    { label: 'Id', key: 'id' },
    { label: 'Name', key: 'name' },
  ];
  public setSearchValue(e: string) {
    this.searchValue = e;
    this.getCategories();
  }
  private getCategories() {
    this._categoryService
      .getCategories(this.searchValue)
      .subscribe((response) => {
        this.categories = response.data;
      });
  }
  ngOnInit(): void {
    this.getCategories();
  }
}

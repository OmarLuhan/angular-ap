import { Component } from '@angular/core';
import { CardImageComponent } from '@components/card-image/card-image.component';
import { SearchBarComponent } from '@components/search-bar/search-bar.component';
import { FieldConfig } from '@app/models/fieldConfig';
import { Product } from '@app/models/product';
import { ProductService } from '@app/services/product.service';

@Component({
  selector: 'app-home',
  imports: [CardImageComponent, SearchBarComponent],
  templateUrl: './store.component.html',
})
export class StoreComponent {
  constructor(private _productService: ProductService) {}
  // Search bar
  searchValue: string = '';
  placeholder: string = 'Search by name or category';
  // Product card
  public products: Product[] = [];
  public isAdmin: boolean = false;
  public productFields: FieldConfig[] = [
    { label: 'Image', key: 'image', type: 'image' },
    { label: 'Name', key: 'name', type: 'title' },
    { label: 'Price', key: 'price' },
    { label: 'OfferPrice', key: 'offerPrice' },
  ];
  public setSearchValue(e: string) {
    this.searchValue = e;
    this.getProducts();
  }
  public getProducts() {
    this._productService.getProducts(this.searchValue).subscribe((response) => {
      this.products = response.data;
    });
  }
  ngOnInit(): void {
    this.getProducts();
  }
}

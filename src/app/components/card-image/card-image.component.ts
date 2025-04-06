import { Component, input } from '@angular/core';
import { FieldConfig } from '@app/models/fieldConfig';
import { Product } from '@app/models/product';
import { ActionsComponent } from '../actions/actions.component';
@Component({
  selector: 'app-card-image',
  imports: [ActionsComponent],
  templateUrl: './card-image.component.html',
})
export class CardImageComponent {
  public data = input<Product>();
  public isAdmin = input<boolean>();
}

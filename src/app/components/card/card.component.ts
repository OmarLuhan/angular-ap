import { Component, input } from '@angular/core';
import { User } from '@app/models/user';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  user = input<User>();
}

import { Component, input } from '@angular/core';
import { FieldConfig } from '@app/models/fieldConfig';
import { LucideAngularModule, ShieldUser } from 'lucide-angular';
import { ActionsComponent } from '../actions/actions.component';
@Component({
  selector: 'app-card',
  imports: [LucideAngularModule, ActionsComponent],
  templateUrl: './card.component.html',
})
export class CardComponent {
  public data = input<any>();
  public fields = input<FieldConfig[]>();
  public isAdmin = input<boolean>();
  readonly shieldUserIcon = ShieldUser;
}

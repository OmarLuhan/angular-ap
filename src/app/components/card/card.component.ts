import { Component, input } from '@angular/core';
import { FieldConfig } from '@app/models/fieldConfig';
import {
  LucideAngularModule,
  ShieldUser,
  PenTool,
  FileX,
} from 'lucide-angular';
@Component({
  selector: 'app-card',
  imports: [LucideAngularModule],
  templateUrl: './card.component.html',
})
export class CardComponent {
  public data = input<any>();
  public fields = input<FieldConfig[]>();
  public isAdmin = input<boolean>();
  readonly shieldUser = ShieldUser;
  readonly penTool = PenTool;
  readonly fileX = FileX;
}

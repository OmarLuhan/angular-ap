import { Component, input } from '@angular/core';
import { User } from '@app/models/user';
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
  public user = input<User>();
  public field = input<User>();
  public isEditMode = false;
  public isDeleteMode = false;
  readonly shieldUser = ShieldUser;
  readonly penTool = PenTool;
  readonly fileX = FileX;
}

import { Component } from '@angular/core';
import { LucideAngularModule, PenTool, FileX } from 'lucide-angular';
@Component({
  selector: 'app-actions',
  imports: [LucideAngularModule],
  templateUrl: './actions.component.html',
})
export class ActionsComponent {
  readonly penToolIcon = PenTool;
  readonly fileXIcon = FileX;
}

import { Component } from '@angular/core';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'app-search-bar',
  imports: [LucideAngularModule],
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  readonly search = Search;
}

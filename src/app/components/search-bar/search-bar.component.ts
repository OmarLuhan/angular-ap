import { Component, output } from '@angular/core';
import { LucideAngularModule, Search } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-search-bar',
  imports: [LucideAngularModule, FormsModule],
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  readonly searchIcon = Search;
  searchText: string = '';
  searchEvent = output<string>();

  private searchSubject = new Subject<string>();
  private searchSubscription!: Subscription;

  ngOnInit() {
    this.searchSubscription = this.searchSubject
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        this.searchText = value;
        this.handleSearch();
      });
  }
  onInputChange(value: string) {
    this.searchSubject.next(value);
  }
  handleSearch() {
    this.searchEvent.emit(this.searchText);
  }
  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}

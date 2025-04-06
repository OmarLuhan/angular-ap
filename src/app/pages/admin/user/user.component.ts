import { Component } from '@angular/core';
import { UserService } from '@services/user.service';
import { User } from '@models/user';
import { CardComponent } from '@components/card/card.component';
import { SearchBarComponent } from '@components/search-bar/search-bar.component';
import { FieldConfig } from '@app/models/fieldConfig';
@Component({
  selector: 'app-user',
  imports: [CardComponent, SearchBarComponent],
  templateUrl: './user.component.html',
})
export class UserComponent {
  constructor(private _userService: UserService) {}
  // Search bar
  searchValue: string = '';
  placeholder: string = 'Search by name or email';
  //user card
  public users: User[] = [];
  private _role: string = 'admin';
  public isAdmin: boolean = true;
  public userFields: FieldConfig[] = [
    { label: 'Name', key: 'fullName' },
    { label: 'Email', key: 'email' },
    { label: 'Role', key: 'role' },
  ];
  public setSearchValue(e: string) {
    this.searchValue = e;
    this.getUsers();
  }
  private getUsers() {
    this._userService
      .getUsers(this._role, this.searchValue)
      .subscribe((response) => {
        this.users = response.data;
      });
  }
  ngOnInit(): void {
    this.getUsers();
  }
}

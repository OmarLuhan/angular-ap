import { Component } from '@angular/core';
import { UserService } from '@services/user.service';
import { User } from '@models/user';
import { CardComponent } from '@components/card/card.component';
import { SearchBarComponent } from '@components/search-bar/search-bar.component';
import { FieldConfig } from '@app/models/fieldConfig';
import { S } from 'node_modules/@angular/core/weak_ref.d-Bp6cSy-X';
@Component({
  selector: 'app-user',
  imports: [CardComponent, SearchBarComponent],
  templateUrl: './user.component.html',
})
export class UserComponent {
  constructor(private _userService: UserService) {}

  public users: User[] = [];
  public search: string = '';
  public role: string = 'admin';
  public isAdmin: boolean = true;
  public userFields: FieldConfig[] = [
    { label: 'Name', key: 'fullName' },
    { label: 'Email', key: 'email' },
    { label: 'Role', key: 'role' },
  ];
  ngOnInit(): void {
    this._userService.getUsers(this.role, this.search).subscribe((response) => {
      this.users = response.data;
    });
  }
}

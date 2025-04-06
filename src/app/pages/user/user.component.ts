import { Component } from '@angular/core';
import { UserService } from '@services/user.service';
import { User } from '@models/user';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
})
export class UserComponent {
  constructor(private _userService: UserService) {}

  public users: User[] = [];
  public search: string = '';
  public role: string = 'admin';
  ngOnInit(): void {
    this._userService.getUsers(this.role, this.search).subscribe((response) => {
      this.users = response.data;
    });
  }
}

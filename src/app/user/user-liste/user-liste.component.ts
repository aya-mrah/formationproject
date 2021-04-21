import { UserDetailsComponent } from 'src/app/user/user-details/user-details.component';
import { Observable } from "rxjs";
import { UserService } from "src/app/service/user.service";
import { User } from "src/app/model/user";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-liste',
  templateUrl: './user-liste.component.html',
  styleUrls: ['./user-liste.component.css']
})
export class UserListeComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.userService.getUsersList();
  }

  deleteUser(code: number) {
    this.userService.deleteUser(code)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  userDetails(code: number){
    this.router.navigate(['detailsUser', code]);
  }

  updateUser(code: number){
      this.router.navigate(['updateUser', code]);
    }

  addUser(){
      this.router.navigate(['addUser']);
        }

}

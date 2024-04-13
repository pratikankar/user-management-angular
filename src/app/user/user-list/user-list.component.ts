import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/shared/interfaces/UserInerface';
import { DataService } from 'src/app/shared/services/data.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: UserInterface[];
  userToEdit: any;

  constructor(private _dataService: DataService, private _router: Router, private http: HttpClient) {}

  ngOnInit() {
    
  }

  editUser(user: UserInterface) {

  }

  deleteUser(userId: string) {

  }

  btnAddUser() {
    this._router.navigateByUrl('/userupsert');
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/shared/interfaces/UserInerface';
import { DataService } from 'src/app/shared/services/data.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  /**
   * Initial variables
   */
  users!: UserInterface[];
  userToEdit: any;

  constructor(private _dataService: DataService, private _router: Router, private http: HttpClient, private _toastr: ToastrService) {}

  ngOnInit() {

    /**
     * getUsers to get all users data
     */
    this._dataService.getUsers().subscribe(users => {
      this.users= users
    });

    /**
    * setting selected user to edit 
    */
    this._dataService.userSelectedToEdit.subscribe(user => {
      this.userToEdit = user;
    });
  }

  /**
   * Function to set selected user to edit details
   * @param user is selected user
   */
  editUser(user: UserInterface) {
    this._dataService.setUserSelected(user);
    this._router.navigateByUrl('userupsert');
  }

  /**
   * Function to delete a user
   * @param id of the user to be deleted
   */
  deleteUser(id: string) {
    this._dataService.deleteUser(id).subscribe(res => {
      console.log(res)
    });
    window.location.reload();
    this._toastr.info('User has been deleted');
  }

  /**
   * Function to navigate to user form
   */
  btnAddUser() {
    this._router.navigateByUrl('/userupsert');
  }

}

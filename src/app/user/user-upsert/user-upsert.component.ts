import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/shared/interfaces/UserInerface';
import { DataService } from 'src/app/shared/services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.css']
})
export class UserUpsertComponent {

  /**
   * Initial variables
   */
  userForm: FormGroup;
  users!: UserInterface[];
  isEdit: boolean = false;

  constructor(private _router: Router, private _dataService: DataService, private _formBuilder: FormBuilder, private _toastr: ToastrService) {
    /**
     * defining user form with validations
     */
    this.userForm = new FormGroup({
      id: new FormControl(Date.now().toString(), Validators.required),
      firstname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      address: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]),
    });

    /**
     * Fetching all users details
     */
    this._dataService.getUsers().subscribe(users => {
      this.users= users
    });

    /**
     * setting selected user for editing
     */
    this._dataService.userSelectedToEdit.subscribe(user => {
      if(user) {
        this.isEdit = true;
        this.userForm.patchValue(user);
      }
    });
  }

  /**
   * Function to add and update user details
   */
  onSubmit() {
    if(this.userForm.valid) {
      // Get data from user form
      const newUser = this.userForm.value;

      // Get data is the user set for editing
      const userToEdit = this._dataService.userSelectedSubject.value;

      // Check if the user is already exist
      const checkUser = this.users.find(user => user.email === newUser.email);
      if(checkUser && !userToEdit) {
        this._toastr.error('User already exist.');
      } else {
        if(userToEdit) {
          // if user is for editing
          this._dataService.updateUser(newUser).subscribe(res => console.log(res));
          this._toastr.warning('User details are updated.')
        } else {
          // if user is new
          this._dataService.addUser(newUser).subscribe(res => console.log(res));
          this._toastr.success('New user added successfully.')
        }
        this._router.navigateByUrl('userlist');
        this.userForm.reset();
      }
    }
  }

  /**
   * Function to check if mobile number field have only numerical values
   * @param event keypress event is recorded
   * @returns true if all are numbers, false if others letters entered
   */
  mobileNumberCheck(event: any): boolean {
    const code = (event.which) ? event.which : event.keyCode;
    if(code < 48 || code > 57) {
      return false;
    }
    return true;
  }

  /**
   * Function to navigate to user list
   */
  goToList() {
    this._router.navigateByUrl('/userlist');
  }

}

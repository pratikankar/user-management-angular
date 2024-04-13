import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.css']
})
export class UserUpsertComponent implements OnInit{


  constructor(private _router: Router, private _dataService: DataService) {}

  ngOnInit() {
    
  }

  userForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  })

  getData(){}

  onSubmit(){}

  updateUserData(){}

  goToList() {
    this._router.navigateByUrl('/userlist');
  }

}

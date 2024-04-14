import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInterface } from '../interfaces/UserInerface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /**
   * url where json-server is running
   * Please run json-server --watch data.json before running ng-serve
   */
  url: string = 'http://localhost:3000/users';

  /**
   * Specifying it for getting user which selected for updating information
   */
  public userSelectedSubject = new BehaviorSubject<any>(null);
  userSelectedToEdit = this.userSelectedSubject.asObservable();

  constructor(private _http: HttpClient) { }

  /**
   * Function to get details of all the users
   * @returns details of all users
   */
  getUsers(): Observable<UserInterface[]> {
    return this._http.get<UserInterface[]>(this.url);
  }

  /**
   * Function to add a new user
   * @param user details of a user
   * @returns details of a new user
   */
  addUser(user: UserInterface): Observable<any> {
    return this._http.post<UserInterface[]>(this.url, user);
  }

  /**
   * Function to update an existing user
   * @param user selected existing user
   * @returns updated infor of edited user
   */
  updateUser(user: UserInterface): Observable<any> {
    let id = user.id.toString();
    return this._http.patch(`${this.url}/${id}`, user)
  }

  /**
   * Function to delete user
   * @param id is the id of the user set to be deleted
   * @returns removes deleted user
   */
  deleteUser(id: string) {
    return this._http.delete(`${this.url}/${id}`);
  }

  /**
   * Function to get the selected user to edit details
   */
  setUserSelected(user: UserInterface) {
    this.userSelectedSubject.next(user)
  }
}

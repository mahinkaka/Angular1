import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { User } from './user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  users: User[];
  myUrl='http://markt99.de/test1/user.txt';

  getUserInfo():Observable<User[]>{
   return this.http.get(`${this.myUrl}`).pipe(map((res:User[])=> {
     this.users=res['Mahin']; 
     return this.users;}))
  }
}

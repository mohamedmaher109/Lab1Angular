import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IUsers } from '../Shared Classes and types/IUsers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  url:string="https://jsonplaceholder.typicode.com/users";

  getAllUsers():Observable<IUsers[]>{
   return this.http.get<IUsers[]>(this.url).pipe(catchError((err)=>{
     return throwError (err.message||"Server error");
   }));
  }
}

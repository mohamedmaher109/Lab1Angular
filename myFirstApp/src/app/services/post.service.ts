import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IPosts } from '../Shared Classes and types/IPosts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url:string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  getAllPosts():Observable<IPosts[]>{
    return this.http.get<IPosts[]>(this.url).pipe(catchError((err)=>{
      return throwError (err.message||"Server error");
  }))
}
}

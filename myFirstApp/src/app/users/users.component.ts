import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUsers } from '../Shared Classes and types/IUsers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList:IUsers[];
  errMsg:string;
  constructor(private userService:UserService) { 
    this.usersList = [];
    this.errMsg="";
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(userData=>{
      this.usersList = userData;
    },error=>{
      this.errMsg=error;
    })
  }

}

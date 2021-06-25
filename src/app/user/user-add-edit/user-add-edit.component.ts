import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.css']
})
export class UserAddEditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() use:any;
  userId:string;
  userName:string;
  userEmail:string;
  userPassword:string;
  userRole:string;

  ngOnInit(): void {
    this.userId=this.use.userId;
    this.userName=this.use.userName;
    this.userEmail=this.use.userEmail;
    this.userRole=this.use.userRole;
    this.userPassword=this.use.userPassword;

  }

  addUser(){
    var val = {userId:this.userId,
      userName:this.userName,userEmail:this.userEmail,userRole:this.userRole,userPassword:this.userPassword};
    this.service.addUser(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateUser(){
    var val = {userId:this.userId,
      userName:this.userName,userEmail:this.userEmail,userRole:this.userRole,userPassword:this.userPassword};
    this.service.updateUser(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
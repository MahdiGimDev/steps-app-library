import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {

  constructor(private service:SharedService ) { }

  UserList:any=[];

  ActivateAddEditUserComp:boolean=false;

  ModalTitle:string;

  use:any;

  ngOnInit(): void {
    this.refreshUserList();
  }

  addClick(){ 
    //console.log('hello');
      this.use={
      userId:0,
      userName:"",
      userEmail:"",
      userRole:"",
      userPassword:"",
    }
this.ModalTitle="Add User Employee";
this.ActivateAddEditUserComp=true;

  }



  editClick(item){
this.use=item;
this.ModalTitle="Edit Employee";
this.ActivateAddEditUserComp=true;
  }

  
  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteUser(item.AuthorId).subscribe(data=>{
        alert(data.toString());
        this.refreshUserList();
      })
    }
  }

closeClick(){
  this.ActivateAddEditUserComp=false;
  this.refreshUserList();
}


refreshUserList(){
  this.service.getUserList().subscribe(data=>{
this.UserList=data;
  });
}



}

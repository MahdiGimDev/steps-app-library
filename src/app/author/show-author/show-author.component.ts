import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.css']
})
export class ShowAuthorComponent implements OnInit {

  constructor(private service:SharedService ) { }

  AuthorList:any=[];

  ActivateAddEditAuthComp:boolean=false;

  ModalTitle:string;

  auth:any;

  ngOnInit(): void {
    this.refreshAuthorList();
  }

  addClick(){ 
    //console.log('hello');
      this.auth={
      AuthorId:0,
      AuthorName:""
    }
this.ModalTitle="Add Author";
this.ActivateAddEditAuthComp=true;

  }



  editClick(item){
this.auth=item;
this.ModalTitle="Edit Author";
this.ActivateAddEditAuthComp=true;
  }

  
  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteAuthor(item.AuthorId).subscribe(data=>{
        alert(data.toString());
        this.refreshAuthorList();
      })
    }
  }

closeClick(){
  this.ActivateAddEditAuthComp=false;
  this.refreshAuthorList();
}


refreshAuthorList(){
  this.service.getAuthorList().subscribe(data=>{
this.AuthorList=data;
  });
}



}

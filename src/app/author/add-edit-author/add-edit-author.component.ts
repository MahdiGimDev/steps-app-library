import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';




@Component({
  selector: 'app-add-edit-author',
  templateUrl: './add-edit-author.component.html',
  styleUrls: ['./add-edit-author.component.css']
})
export class AddEditAuthorComponent implements OnInit {
  constructor(private service:SharedService) { }

  @Input() auth:any;
  AuthorId:string;
  AuthorName:string;

  ngOnInit(): void {
    this.AuthorId=this.auth.AuthorId;
    this.AuthorName=this.auth.AuthorName;
  }

  addAuthor(){
    var val = {AuthorId:this.AuthorId,
                AuthorName:this.AuthorName};
    this.service.addAuthor(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateAuthor(){
    var val = {AuthorId:this.AuthorId,
      AuthorName:this.AuthorName};
    this.service.updateAuthor(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
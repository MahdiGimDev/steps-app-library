import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() boo:any;
  bookId:string;
  bookName:string;
  bookAuthor:string;
  bookType:string;

AuthorList:any=[];
TypeList:any=[];
  ngOnInit(): void {
    this.loadAuthors();
    this.loadTypes();
    this.bookName=this.boo.bookName;
  }

  loadAuthors(){
    this.service.getAllAuthorNames().subscribe((data:any)=>{
this.AuthorList=data;
this.bookId=this.boo.bookId;
this.bookName=this.bookName;
this.bookAuthor=this.boo.bookAuthor;
    });
  }


  loadTypes(){
    this.service.getAllTypesNames().subscribe((data:any)=>{
this.TypeList=data;
this.bookId=this.boo.bookId;
this.bookName=this.bookName;
this.bookType=this.boo.bookType;
    });
  }



  addBook(){
    var val = {bookId:this.bookId,
      bookName:this.bookName,bookAuthor:this.bookAuthor,bookType:this.bookType};
    this.service.addBook(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateBook(){
    var val = {bookId:this.bookId,
      bookName:this.bookName,bookAuthor:this.bookAuthor,bookType:this.bookType};
    this.service.updateBook(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
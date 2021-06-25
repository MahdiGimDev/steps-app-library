import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

  constructor(private router: Router, private shared: SharedService) {
    if (!this.shared.getuser()) {
      // redirect login
      this.router.navigateByUrl('/login');
    }
  }

  BookList: any = [];

  ActivateAddEditBookComp: boolean = false;

  ModalTitle: string;

  boo: any;

  ngOnInit(): void {
    this.refreshBookList();
  }

  addClick() {

    this.boo = {
      bookId: 0,
      bookName: "",
      bookType: "",
      bookAuthor: "",

    }
    this.ModalTitle = "Add Book";
    this.ActivateAddEditBookComp = true;

  }



  editClick(item) {
    this.boo = item;
    this.ModalTitle = "Edit Book";
    this.ActivateAddEditBookComp = true;
  }


  deleteClick(item) {
    if (confirm('Are you sure??')) {
      this.shared.deleteBook(item.bookId).subscribe(data => {
        alert(data.toString());
        this.refreshBookList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditBookComp = false;
    this.refreshBookList();
  }


  refreshBookList() {
    this.shared.getBookList().subscribe(data => {
      this.BookList = data;
    });
  }



}

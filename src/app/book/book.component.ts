import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private router: Router, private shared: SharedService) {
    if (this.shared.getuser() === null) {
      // redirect login
      this.router.navigateByUrl('/book');
    }
  }

  ngOnInit(): void {
  }

}

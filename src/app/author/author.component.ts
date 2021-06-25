import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private router: Router, private shared: SharedService) {
    if (this.shared.getuser() === null) {
      // redirect login
      this.router.navigateByUrl('/login');
    }
  }


  ngOnInit(): void {
  }

}

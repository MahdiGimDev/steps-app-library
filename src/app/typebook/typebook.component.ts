import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-typebook',
  templateUrl: './typebook.component.html',
  styleUrls: ['./typebook.component.css']
})
export class TypebookComponent implements OnInit {

  constructor(private router: Router, private shared: SharedService) {
    if (this.shared.getuser() === null) {
      // redirect login
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit(): void {
  }

}

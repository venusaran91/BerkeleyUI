import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-visit',
  templateUrl: './user-visit.component.html',
  styleUrls: ['./user-visit.component.scss']
})
export class UserVisitComponent implements OnInit {
  userCount:number;

  constructor(private route: ActivatedRoute) { 
    this.userCount=this.route.snapshot.data.userCountDetails?this.route.snapshot.data.userCountDetails.visit_count:0;
    console.log(this.route.snapshot.data);
  }

  ngOnInit() {
  }

}

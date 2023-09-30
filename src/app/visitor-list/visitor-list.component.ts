import { Component, OnInit } from '@angular/core';
import { Visitor } from '../visitor';
import { VisitorService } from '../visitor.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit{

  visitors: Visitor[];
  VisitorService: any;

  constructor(private service: VisitorService,
    private router: Router) {}

  ngOnInit(): void {
// this.visitors = [{
//   // id: 1,
//   // visitorName: "anish",
//   // visitorAddress: "demon",
//   // visitorEntryTime : 12,
//   // visitorOutingTime : 4,
//   // contractors : "sunit",
//   // vistingPurpose : "meets",
//   // phone: 12345678,
// }]

   this.getVisitor();
  }

  private getVisitor(){
    this.service.getVisitorList().subscribe(data => {
      this.visitors = data;
    });
  }

  visitorDetails(id: number){
    this.router.navigate(['visitor-details', id]);
  }

  updateVisitors(id:number){
    this.router.navigate(['update-visitor', id]);
  }

  deleteVisitors(id: number){
    this.service.deleteVisitor(id).subscribe(data => {
      console.log(data);
      this.getVisitor();
    });
  }

}

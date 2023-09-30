import { Component, OnInit } from '@angular/core';
import { Visitor } from '../visitor';
import { VisitorService } from '../visitor.service';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visitor-details',
  templateUrl: './visitor-details.component.html',
  styleUrls: ['./visitor-details.component.css']
})
export class VisitorDetailsComponent implements OnInit{

  id: number;
  visitor: Visitor
  constructor(private route: ActivatedRoute,
    private visitorService: VisitorService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.visitor = new Visitor();
    this.visitorService.getVisitorById(this.id).subscribe(data => {
      this.visitor = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Visitor } from '../visitor';
import { VisitorService } from '../visitor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-visitor',
  templateUrl: './update-visitor.component.html',
  styleUrls: ['./update-visitor.component.css']
})
export class UpdateVisitorComponent implements OnInit{

  id : number;
  visitor: Visitor = new Visitor();
  constructor(private visitorService: VisitorService,
    private route: ActivatedRoute,
    private router: Router) {}


ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];

this.visitorService.getVisitorById(this.id).subscribe(data => {
  this.visitor = data;
},error => console.log(error));
}

onSubmit(){
  this.visitorService.updateVisitor(this.id, this.visitor).subscribe(data =>{
    console.log(data);
    this.goToVisitorList();
  }, error => console.log(error));
 
}

goToVisitorList(){
  this.router.navigate(['/visitors'])
}

}

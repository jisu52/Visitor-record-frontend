import { Component,OnInit } from '@angular/core';
import { Visitor } from '../visitor';
import { VisitorService } from '../visitor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-visitor',
  templateUrl: './create-visitor.component.html',
  styleUrls: ['./create-visitor.component.css']
})
export class CreateVisitorComponent implements OnInit{

  id:number;
  visitor: Visitor = new Visitor();
  constructor(private visitorService: VisitorService,
    private router: Router) {}

  ngOnInit(): void {
      
  }

  saveVisitor() {
    this.visitorService.createVisitor(this.visitor).subscribe(data => {
      console.log(data);
      this.goToVisitorList();
    })
    // error => console.log(error));
  }

  goToVisitorList(){
    this.router.navigate(['/visitors']);
  }

  

  onSubmit(){
    console.log(this.visitor);
    this.saveVisitor();
  }
}

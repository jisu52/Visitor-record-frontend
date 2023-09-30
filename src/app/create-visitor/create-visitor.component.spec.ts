import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVisitorComponent } from './create-visitor.component';

describe('CreateVisitorComponent', () => {
  let component: CreateVisitorComponent;
  let fixture: ComponentFixture<CreateVisitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateVisitorComponent]
    });
    fixture = TestBed.createComponent(CreateVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

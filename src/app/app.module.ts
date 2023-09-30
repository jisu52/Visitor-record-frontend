import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { CreateVisitorComponent } from './create-visitor/create-visitor.component';
import { UpdateVisitorComponent } from './update-visitor/update-visitor.component';
import { VisitorDetailsComponent } from './visitor-details/visitor-details.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitorListComponent,
    CreateVisitorComponent,
    UpdateVisitorComponent,
    VisitorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

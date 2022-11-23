import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegformComponent } from './regform/regform.component';
import { SelectService } from './select.service';

@NgModule({
  declarations: [
    AppComponent,
    RegformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [SelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

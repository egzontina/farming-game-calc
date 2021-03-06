import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TouchInputSpinnerComponent } from './touch-input-spinner/touch-input-spinner.component';
import { FormsModule } from '@angular/forms';
import { DollarAmountInputComponent } from './dollar-amount-input/dollar-amount-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TouchInputSpinnerComponent,
    DollarAmountInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

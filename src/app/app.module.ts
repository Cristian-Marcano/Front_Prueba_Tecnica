import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadComponent } from './components/load/load.component';
import { FormComponent } from './components/form/form.component';
import { ErrorLinkComponent } from './components/error-link/error-link.component';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    LoadComponent,
    FormComponent,
    ErrorLinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

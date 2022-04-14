import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AppService } from './app.component.service';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [

    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyA0SZkdFbVkeNhZMGmgp5LrNB7_gFoOe_Y'
    }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

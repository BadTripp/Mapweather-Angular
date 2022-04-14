import { Component } from '@angular/core';
import { AppService } from './app.component.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Controlla meteo';
  lat = 51.678418;
  lng = 7.809007;
  risultato:any;

  constructor(private appService:AppService){}
  
  mapClick(e:any){
    console.log(e.coords.lat)
    console.log(e.coords.lng)
    this.appService.getData(e.coords.lat,e.coords.lng).subscribe({
      next:(dato:any)=>{
        this.risultato=dato;
        console.log(this.risultato)
      }


    });



    
  }
}

import { Component, OnInit } from '@angular/core';
import { AppService } from './app.component.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Meteo';
  imgLoading='https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg'
  lat = 51.678418;
  lng = 7.809007;
  risultato:any;
  loading=true;
  zone="";
  

  constructor(private appService:AppService){}
  ngOnInit(): void {
    this.zone="";
    
  }
  
  mapWeather(zona:any){
    this.loading=true;
    this.appService.getWeather(zona).subscribe({
      next:(meteo:any)=>{
          this.risultato=meteo;
          console.log(this.risultato)
          console.log(this.risultato.currentConditions)
          this.loading=!this.loading
      }
    })
  }

  mapClick(e:any){
    
    this.loading=true;
    this.zone="Sto Caricando";
    this.lat=e.coords.lat
    this.lng=e.coords.lng
    this.appService.getData(e.coords.lat,e.coords.lng).subscribe({
      next:(dato:any)=>{
        this.risultato=dato;
        console.log(this.risultato)
        this.zone=this.risultato.address.state
        this.mapWeather(this.zone)
        
      }


    });



    
  }
}

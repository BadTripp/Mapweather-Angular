import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class AppService {

    constructor (private http:HttpClient){}

    getData(lat:any,lng:any):Observable<any>{
        

        let url="https://nominatim.openstreetmap.org/reverse?format=json&lat="+lat+"&lon="+lng;
        
        return this.http.get<any>(url);

        
    }

    getWeather(town:string):Observable<any>{
        console.log(town.replace(/[^a-zA-Z ]/g, ""))
        let url="https://weatherdbi.herokuapp.com/data/weather/"+town.replace(/[^a-zA-Z ]/g, "");
        
        return this.http.get<any>(url);

    }
}
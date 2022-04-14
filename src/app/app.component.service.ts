import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class AppService {

    constructor (private http:HttpClient){}

    getData(lat:any,lng:any):Observable<any>{
        

        let url="https://nominatim.openstreetmap.org/reverse?lat="+lat+"&lon="+lng;
        
        return this.http.get<any>(url);
    }
}
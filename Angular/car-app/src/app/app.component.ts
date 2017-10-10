import { Component } from '@angular/core';
import { CarService } from "./car/car.service";
import { Car } from "./car/Car";
import { Router } from '@angular/router';
import { Http, Response } from "@angular/http";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CarService]
})
export class AppComponent{
  title = 'Car Application';
  private apiUrl = 'http://localhost:8080/carApp';
  data: any={};


  constructor(private http: Http) {
  }

  //OBTENER INFORMACION DEL SERVICIO CON SU MENSAJE DE RESPUESTA
  getDataServer(plateNumbre: string, date: string ){
    return this.http.get(this.apiUrl+'/'+plateNumbre+'/'+date).map((res:Response)=>res["_body"]);
  }
  //
  getDataAll(plateNumbre: string, date: string){
    return this.getDataServer(plateNumbre, date).subscribe(data=>{
      this.data=data;
       alert((data));
      //document.getElementById('content').innerHTML=data;
      $("#content").html(data);
    });
  }

  //METODO EJECUTADO POR EL BOTON VERIFICAR, COMPARA CON LOS DATOS DEL SERVICIO
  comparePlateNum(plateNumbre: string, date: string){
      return this.getDataAll(plateNumbre, date);

  }
}

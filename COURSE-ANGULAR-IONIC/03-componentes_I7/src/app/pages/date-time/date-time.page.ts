import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage {

  //nuevo metodo para ver que mando con la fecha por consola
  fecha: Date = new Date;

  cambioFecha(event: any) {
    console.log(event);
    //mostrar en consola los cambios en tiempo real de la fecha
    console.log(new Date(event.detail.value));
  }


  cambioDateTime(event: any){
    console.log(event.detail.value);  
  }




}

//servicio creado para llamar o consumir datos de un json

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interface';
import {delay} from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {


  //INJECTAR EL HTTPCLIENT PARA SU USO
  constructor(private http: HttpClient ) { }


  //METODO PARA RETURNAR LA INFORMACION 
  getUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users'); 
  }

  //traer info de todas las rutas de la pagina por medio del archivo .json en assets/data/menu-opts.json
  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu-opts.json'); 
  }

  getAlbumes(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums'); 
  }


  getHeroes(){
    return this.http.get<Componente[]>('/assets/data/superheroes.json').
            pipe(
              delay(1500)
            );  
                    
  }

}

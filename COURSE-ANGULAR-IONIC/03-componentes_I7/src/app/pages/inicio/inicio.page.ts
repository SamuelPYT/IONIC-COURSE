import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interface';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes!: Observable<Componente[]>; 


  // //arreglo "Componente" para la lista de items
  // componentes: Componente[] = [];  


//injectar el controlador del menú
constructor(private menu: MenuController, 
            private dataService: DataService) 
            { 
              this.componentes = this.dataService.getMenuOpts(); 
            }

  mostrarMenu(){
      //llamar al metodo del menu por el id
      this.menu.open('first');  
  }  




  ngOnInit() {
  }



}

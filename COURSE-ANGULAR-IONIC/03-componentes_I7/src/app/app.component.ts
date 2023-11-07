import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Componente } from './interfaces/interface';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  componentes!: Observable<Componente[]>; 
  
  
  constructor(private menu: MenuController, 
    private dataService: DataService) 
    { 
      this.componentes = this.dataService.getMenuOpts();   
    }




}

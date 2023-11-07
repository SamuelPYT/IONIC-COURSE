import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Batman', 'Superman', 'Flash', 'Hulk', 'Iron Man']; 

  public buttonStatus = true; 

  doReorder(event: any){
    console.log(event);
    
    //ver cambios del movimiento en pantalla 
    //#1 cortar o extraer el elemento 
    const itemMover = this.personajes.splice( event.detail.from, 1)[0]; 
    
    //insertar el elemento en la nueva posición 
    this.personajes.splice(event.detail.to, 0, itemMover); 

    event.detail.complete(); 
    console.log(this.personajes);
    console.log(JSON.stringify(this.personajes));  
  }

  onClick(){
    //marcar o desmarcar el toggle
    this.buttonStatus = !this.buttonStatus; 
  }


  constructor() { }

  ngOnInit() {
    
  }

}

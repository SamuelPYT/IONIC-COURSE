import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {


  //loading va a ser igual a la promesa que retorna el create()
  loading!: HTMLIonLoadingElement; 

  //injectamos el servicio 
  constructor(private loadingCtrl: LoadingController) { }

  
  //funcioón del botón que viene del html 
  mostrarLoading(){
    this.showLoading('Cargando...');
    
    
    //definir el tiempo que va a durar el efecto de carga
    setTimeout(() => {
      this.loading.dismiss(); 
    }, 2000);
  }
  
  
  //implementación del efecto loading 
  async showLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
    });
    await this.loading.present(); 
  }
  
  ngOnInit() {
  }
}

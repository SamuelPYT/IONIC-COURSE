import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  buttonOpen =  false; 


  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async abrirToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastCtrl.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }


  async abrirToastOpciones() {
    const toast = await this.toastCtrl.create({
      header: '¿Estás seguro de salir?',
      message: 'Click para cancelar',
      position: 'top',
      buttons: [
        {
          side: 'start',
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('OK');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          },
        },
      ],
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('Se seleccionó', role);
  }
}





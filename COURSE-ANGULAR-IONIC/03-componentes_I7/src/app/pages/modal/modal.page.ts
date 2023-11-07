import { Component, ViewChild } from '@angular/core';
import { IonList, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage{

  nombre = 'Samuel'
  pais = 'Colombia'


  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen; 
  }




}

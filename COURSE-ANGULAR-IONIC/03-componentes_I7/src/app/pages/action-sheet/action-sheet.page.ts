import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage {


  //injección del método para el action Sheet 
  constructor(private actionSheetCtrl: ActionSheetController) { }

  

  onClick(){
    //llamamos al método presentActionSheet() 
    this.presentActionSheet(); 
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          handler: () => {
            console.log('Delete Clickled')
          },
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          handler: () => {
            console.log('Share Clickled')
          },
          icon: 'share-outline',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel Clickled')
          },
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
}





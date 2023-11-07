import { Component, OnInit } from '@angular/core';
import { AlertController, IonButtons } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage {


  //nom propio   // controlador ppal
  constructor(private alertCtrl: AlertController) { }

  onClick() {
    //llamamos al método presentActionSheet() 
    this.presentAlert();
  }


  //type button 1 
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Cancel");
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log("Confirm ");
          },
        },
      ],
    });

    await alert.present();

  }


  //type button 2
  async presentAlertOptions() {
    const alert = await this.alertCtrl.create({
      header: 'Select your favorite color',
      backdropDismiss: false,
      buttons: [{
        text: 'OK',
        handler: (data: any) => {
          console.log(data); 
        }

      }],
      inputs: [
        {
          label: 'Red',
          type: 'radio',
          value: 'red',
        },
        {
          label: 'Blue',
          type: 'radio',
          value: 'blue',
        },
        {
          label: 'Green',
          type: 'radio',
          value: 'green',
        },
      ],
    });

    await alert.present();
  }


  //type button 3
  async presentAlertOk() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert!',
      subHeader: 'Subtitle',
      message: 'This is a message of alert',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log("OK");
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Cancel ");
          },
        }
      ]
    });

    await alert.present();

  }


  //Button Form v6
  async presentAlertForm() {
    const alert = await this.alertCtrl.create({
      header: 'Please enter your info',
      inputs: [
        {
          placeholder: 'Name',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
      buttons: [{
        text: 'OK',
        handler: (data: any) => {
          console.log(data)
          }
        }, 
        {
        text: 'Cancel',
        handler: () => {
          console.log('Cancel')
          }
        }
      ]
    }); 

    await alert.present();
  }




  //Button Form v7
  public alertButtons = ['OK']
  public alertInputs = [
  {
    placeholder: 'Name',
  },
  {
    placeholder: 'Nickname (max 8 characters)',
    attributes: {
      maxlength: 8,
    },
  },
  {
    type: 'number',
    placeholder: 'Age',
    min: 1,
    max: 100,
  },
  {
    type: 'textarea',
    placeholder: 'A little about yourself',
  },
];


}




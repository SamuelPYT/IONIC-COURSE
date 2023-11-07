import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  nombre: string = ''; 

  usuario = {
    email: '',
    password: ''
  }

  onSubmit(){
    console.log(this.usuario); 

  }

  constructor() { }

  ngOnInit() {
  }




}

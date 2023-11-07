import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  porcentaje: number = 0; 


  constructor() { }

  ngOnInit() {
  }

  rangeChange(event: any){  
    this.porcentaje = event.detail.value / 100; 
    console.log(this.porcentaje);
  }


  pinFormatter(value: number) {
    return `${value}%`;
  }
  



}

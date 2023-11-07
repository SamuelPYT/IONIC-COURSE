import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes!: Observable<any>; 
  //crear var que sea igual a lo que idenfica al superheroe, en este caso el publisher
  publisher: string = ''; 

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.superHeroes = this.dataService.getHeroes(); 


  }

  segmentChanged(event: any){
    // console.log(event.detail.value);
    this.publisher = event.detail.value; 
    
  }


}

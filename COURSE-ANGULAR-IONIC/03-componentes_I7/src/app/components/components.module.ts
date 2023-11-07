import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule} from '@ionic/angular';

//  mis importaciones
import { HeaderComponent } from './header/header.component';
import { PopoverInfoComponent } from './popover-info/popover-info.component';


//CUANDO EXISTA UN COMPONENTE MEDIANTE LAZYLOAD, SIEMPRE SE DEBE DECLARAR E IMPORTAR 
@NgModule({
  declarations: [
    HeaderComponent,
    PopoverInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    
  ],
  exports: [
    HeaderComponent,
    PopoverInfoComponent
  ]
})
export class ComponentsModule { }

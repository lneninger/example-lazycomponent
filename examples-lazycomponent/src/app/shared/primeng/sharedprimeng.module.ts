import { NgModule } from '@angular/core';
import { StepsModule } from 'primeng';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [],
  imports: [
    StepsModule
  ],
  exports: [

    FlexLayoutModule,
    StepsModule

  ]
})
export class SharedPrimeNgModule { }

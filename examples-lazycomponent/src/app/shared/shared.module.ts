import { SharedComponentModule } from './+components/sharedcomponent.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from './material/sharedmaterial.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedComponentModule
  ],
  exports: [
    CommonModule,
    SharedMaterialModule,
    SharedComponentModule
  ]
})
export class SharedModule { }

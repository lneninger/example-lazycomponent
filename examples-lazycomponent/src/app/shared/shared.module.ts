import { SharedComponentModule } from './+components/sharedcomponent.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from './material/sharedmaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedMaterialModule,
    SharedComponentModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    SharedMaterialModule,
    SharedComponentModule
  ]
})
export class SharedModule { }

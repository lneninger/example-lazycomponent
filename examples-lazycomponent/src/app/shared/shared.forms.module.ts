import { SharedComponentModule } from './+components/sharedcomponent.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from './material/sharedmaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedFormsModule { }

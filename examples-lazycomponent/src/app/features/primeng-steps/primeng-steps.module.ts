import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengStepsComponent } from './primeng-steps.component';
import { SharedComponentModule } from 'src/app/shared/+components/sharedcomponent.module';
import { SharedPrimeNgModule } from 'src/app/shared/primeng/sharedprimeng.module';



@NgModule({
  declarations: [PrimengStepsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: PrimengStepsComponent
    }]),
    SharedComponentModule,
    SharedPrimeNgModule,
    FlexLayoutModule

  ]
})
export class PrimengStepsModule { }

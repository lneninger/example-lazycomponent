import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { SharedFormsModule } from 'src/app/shared/shared.forms.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    SharedFormsModule,
    SharedModule
  ],
  declarations: [
    StatisticsComponent
  ],
  entryComponents: [
    StatisticsComponent
  ]
})
export class StatisticsModule {
  static entry = StatisticsComponent;
}

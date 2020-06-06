import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoaderDirective } from './lazy-loader.directive';
import { LazyRoute, LAZY_WIDGETS, LazyLoaderService } from './lazy-loader-service';
import { LazyLoaderHideDirective } from './lazy-loader-hide.directive';

@NgModule({
  declarations: [LazyLoaderDirective, LazyLoaderHideDirective],
  imports: [
    CommonModule
  ],
  exports: [
    LazyLoaderDirective,
    LazyLoaderHideDirective
  ]

})
export class LazyLoaderModule {

  static config(config: LazyRoute[]): ModuleWithProviders<LazyLoaderModule> {
    return {
      ngModule: LazyLoaderModule,
      providers: [
        LazyLoaderService,
        { provide: LAZY_WIDGETS, useValue: config }
      ]
    };
  }

}

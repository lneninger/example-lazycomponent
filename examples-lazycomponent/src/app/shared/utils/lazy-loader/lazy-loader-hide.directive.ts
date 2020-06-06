import { Directive, Input, ViewContainerRef, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { LazyLoaderService } from './lazy-loader-service';
import { LazyLoaderChangedEvent, LazyLoaderStatus } from './lazy-loader.model';

@Directive({
  selector: '[appLazyLoaderHide]'
})
export class LazyLoaderHideDirective implements OnInit, OnDestroy {
  hasView: boolean;

  @Input() appLazyLoaderHide = '';

  constructor(private templateRef: TemplateRef<any>, public viewContainerRef: ViewContainerRef, private service: LazyLoaderService) {

  }

  ngOnInit() {
    this.configureMarkupChanged();
    this.process(null);
  }


  configureMarkupChanged() {
    // debugger;
    this.service.activatedMarkup$.subscribe((event: LazyLoaderChangedEvent) => {
      this.process(event);
    });
  }

  process(event: LazyLoaderChangedEvent) {
    // debugger;
    if (!event || (event.name || '') === (this.appLazyLoaderHide || '')) {
      const condition = event && event.status === LazyLoaderStatus.activated;
      if (!condition && !this.hasView) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (condition && this.hasView) {
        this.viewContainerRef.clear();
        this.hasView = false;
      }
    }
  }

  ngOnDestroy() {
    this.viewContainerRef.clear();
  }

}

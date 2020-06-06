import { LazyLoaderInjector } from './lazy-loader-injector';
import { Compiler, Injector, NgModuleFactory, Type, ViewContainerRef, Inject, Injectable, QueryList, EventEmitter } from '@angular/core';

import { InjectionToken } from '@angular/core';
import { LazyLoaderDirective } from './lazy-loader.directive';
import { LazyLoaderChangedEvent, LazyLoaderStatus } from './lazy-loader.model';

export const LAZY_WIDGETS = new InjectionToken<{ [key: string]: string }>('LAZY_WIDGETS');

/** Injection token that can be used to access the data that was passed in to a dialog. */
export const DYNAMIC_DATA = new InjectionToken<any>('DynamicComponentData');

export interface LazyRoute {
  path: string;
  loadChildren: () => Promise<NgModuleFactory<any> | Type<any>>;
}

@Injectable()
export class LazyLoaderService {
  private lazyLoaderGroups: { [key: string]: QueryList<LazyLoaderDirective> } = {};
  activatedMarkup$ = new EventEmitter<LazyLoaderChangedEvent>();


  constructor(
    private injector: Injector,
    private compiler: Compiler,
    @Inject(LAZY_WIDGETS) private lazyWidgets: LazyRoute[]
  ) { }

  async load(name: string, groupType: Type<any>, markupId?: string, data?: any): Promise<any> {
    // debugger;
    const group = this.lazyLoaderGroups[groupType.name];
    let container: LazyLoaderDirective;
    if (group) {
      if (markupId) {
        container = group.find(_ => _.appLazy && _.appLazy.toUpperCase() === markupId.toUpperCase());
      }

      if (container == null) {
        container = group.find(_ => !_.appLazy);
      }
    } else {
      return;
    }

    if (container && container.viewContainerRef.length === 0) {
      const promise = this.lazyWidgets.find(lazyTarget => lazyTarget.path === name);

      if (promise) {
        const tempModule = await promise.loadChildren();

        let moduleFactory;

        if (tempModule instanceof NgModuleFactory) {
          // For AOT
          moduleFactory = tempModule;
        } else {
          // For JIT
          moduleFactory = await this.compiler.compileModuleAsync(tempModule);
        }

        let moduleRef: any;
        const entryComponent = (moduleFactory.moduleType as any).entry;

        if (data) {
          const map = new WeakMap<any, any>();
          map.set(DYNAMIC_DATA, data);
          moduleRef = moduleFactory.create(new LazyLoaderInjector(this.injector, map));
        } else {
          moduleRef = moduleFactory.create(this.injector);
        }

        const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);

        const componentRef = container.viewContainerRef.createComponent(compFactory);

        // debugger;
        this.activatedMarkup$.next({name: container.appLazy, status: LazyLoaderStatus.activated} as LazyLoaderChangedEvent)
      }
    }
  }

  initialize(targetComponent: Type<any>, lazyloaderMarkups: QueryList<LazyLoaderDirective>) {
    const groupKey = targetComponent.name;
    this.lazyLoaderGroups[groupKey] = lazyloaderMarkups;
    // debugger;
  }
}

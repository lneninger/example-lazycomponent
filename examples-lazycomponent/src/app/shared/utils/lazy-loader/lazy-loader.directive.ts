import { Directive, ViewContainerRef, Input, OnDestroy } from '@angular/core';

@Directive({
    selector: '[appLazy]'
})
export class LazyLoaderDirective implements OnDestroy {

    @Input()
    appLazy: string;

    @Input()
    appLazyData: any;

    constructor(public viewContainerRef: ViewContainerRef) {

    }

    ngOnDestroy() {
        this.viewContainerRef.clear();
    }

}

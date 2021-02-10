import { Component, AfterViewInit, OnDestroy, Type, ComponentFactoryResolver, ViewChild, ComponentRef, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { InsertionDirective } from './insertion.directive';

@Component({
    selector: 'dynamic-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements AfterViewInit, OnDestroy {
    private readonly _onClose = new Subject<any>();
    public componentRef: ComponentRef<any>;
    childComponentType: Type<any>;
    public onClose = this._onClose.asObservable();

    @ViewChild(InsertionDirective)
    insertionPoint: InsertionDirective;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private cd: ChangeDetectorRef
    ){}

    ngAfterViewInit(): void{
        this.loadChildComponent(this.childComponentType);
        this.cd.detectChanges();
    }

    onOverlayClicked(evt: MouseEvent) {
        // close the dialog
        
    }

    onDialogClicked(evt: MouseEvent) {
        evt.stopPropagation();
    }

    loadChildComponent(componentType: Type<any>) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    
        let viewContainerRef = this.insertionPoint.viewContainerRef;
        // viewContainerRef.clear();
    
        this.componentRef = viewContainerRef.createComponent(componentFactory);
    }

    ngOnDestroy(): void{
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
}

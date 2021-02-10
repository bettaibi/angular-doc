import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { SnackbarComponent } from './snackbar.component';

@Injectable()
export class SnackbarService {
    private snackbarComponentRef: ComponentRef<SnackbarComponent>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private appRef: ApplicationRef
    ){}


    private appendSnackbarToBody(): void{
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SnackbarComponent);
        const componentRef = componentFactory.create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        
        document.body.appendChild(domElem);
        this.snackbarComponentRef = componentRef;
    }

    open(message: string, timer: number): void{
        this.appendSnackbarToBody();
        this.snackbarComponentRef.instance.message = message;
        setTimeout(()=>{
            this.removeSnackbarComponent();
        }, timer);
    }

    private removeSnackbarComponent(): void{
        this.appRef.detachView(this.snackbarComponentRef.hostView);
        this.snackbarComponentRef.destroy();
    }
}
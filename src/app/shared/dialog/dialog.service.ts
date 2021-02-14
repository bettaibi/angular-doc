import {
    Injectable,
    ComponentFactoryResolver,
    ApplicationRef,
    Injector,
    EmbeddedViewRef,
    ComponentRef,
    Type,
} from '@angular/core'
import { Subscription } from 'rxjs';
import { DialogComponent } from './dialog.component'

@Injectable()
export class DialogService {
    dialogComponentRef: ComponentRef<DialogComponent>;
    private sub: Subscription;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) {}
    
    appendDialogComponentToBody() {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
        const componentRef = componentFactory.create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

        document.body.appendChild(domElem);

        this.dialogComponentRef = componentRef;

        this.sub = this.dialogComponentRef.instance.onClose.subscribe(()=>{
            this.removeDialogComponentFromBody()
        });
    }

    private removeDialogComponentFromBody() {
        this.appRef.detachView(this.dialogComponentRef.hostView);
        this.dialogComponentRef.destroy();
        this.sub.unsubscribe();
    }

    public open(componentType: Type<any>) {
        this.appendDialogComponentToBody();
        this.dialogComponentRef.instance.childComponentType = componentType;
    }


}
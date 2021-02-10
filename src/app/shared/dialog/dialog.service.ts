import {
    Injectable,
    ComponentFactoryResolver,
    ApplicationRef,
    Injector,
    EmbeddedViewRef,
    ComponentRef,
    Type,
} from '@angular/core'
import { DialogComponent } from './dialog.component'

@Injectable()
export class DialogService {
    dialogComponentRef: ComponentRef<DialogComponent>;

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
    }

    private removeDialogComponentFromBody() {
        this.appRef.detachView(this.dialogComponentRef.hostView);
        this.dialogComponentRef.destroy();
    }

    public open(componentType: Type<any>) {
        this.appendDialogComponentToBody();
        this.dialogComponentRef.instance.childComponentType = componentType;
    }


}
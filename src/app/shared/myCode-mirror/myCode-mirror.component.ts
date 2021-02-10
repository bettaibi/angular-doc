import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'myCode-mirror',
    templateUrl: './myCode-mirror.component.html',
    styleUrls: ['./myCode-mirror.component.css']
})
export class MyCodeMirrorComponent implements OnInit {
    @Input() public html: string;
    @Input() public ts: string;
    @Input() public scss: string;
    @Input() public readOnly: boolean;

    private selected: string;

    constructor() {
        this.selected = types.TS;
        this.readOnly = false;
    }

    ngOnInit(): void { }

    get getSelected(): string{
        return this.selected;
    }

    set setSelected(newValue: string){
        this.selected = newValue;
    }

    updateSelection(e: any, prop: string): void{
       this.setSelected = types[prop];
    }

    copyContent(): void {
        console.log("djdjd")
        const copy = document.createElement('textarea');
        copy.value = this.getSelected === types.TS? this.ts : this.getSelected == types.HTML? this.html: this.scss;
        document.body.appendChild(copy);

        copy.select();
        copy.setSelectionRange(0, 99999);

        document.execCommand('copy');

         copy.remove();
    }
}

enum types {
    TS = 'TS',
    HTML = 'HTML',
    SCSS = 'SCSS'
};

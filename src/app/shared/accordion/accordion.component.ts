import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'bn-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
    @Input() public panel: any;
    @Input() public activeSection: string;
    @Input() public activeTopic: string;
    @Output() public onTopicChange = new EventEmitter<string>();
    @Output() public onSectionChange = new EventEmitter<string>();

    constructor() { }

    onPanelChange(id: string): void{
        this.onSectionChange.emit(id);
    }

    onSubjectChange(id: string) :void{
        this.onTopicChange.emit(id);
    }

    ngOnInit(): void { }
}

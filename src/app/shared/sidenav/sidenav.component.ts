import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'bn-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
    @Input() isOpen: boolean;
    @Input() csStyle = {};

    constructor() {}

    ngOnInit(): void { }
}

import { Component, OnInit } from '@angular/core';
import { ISection } from 'src/app/models/app';


@Component({ 
    selector: 'app-guest',
    templateUrl: './guest.component.html',
    styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
    isOpen = false;
    sections: ISection[];
    activeSection: string;
    currentTopic: string;
    constructor() {
        this.sections = [
                {
                    id: '789',
                    name: 'Get Started',
                    titles: [
                        {id: '1', title: "Components"},
                        {id: '2', title: "Dynamic Components"},
                        {id: '3', title: "Sharing data between components"}
                    ]
                },
                {
                    id: '652',
                    name: 'Angulat Test',
                    titles: [
                        {id: "4", title: "Jasmine Test"},
                        {id: "5", title: "Angular Test"}
                    ]
                }
        ]
    }


    ngOnInit(): void {
        this.activeSection = this.sections[0].id;
        this.currentTopic = this.sections[0].titles[0].id;
    }

     toggleSidenav(): void{
        const btn = document.getElementById('close-icon');
        this.isOpen = !this.isOpen;
         if(this.isOpen){
             btn.style.transform = 'rotate(135deg)';
         }
         else{
            btn.style.transform = 'rotate(0)';
         }
     }

     onTopicChange(e: string){
        this.currentTopic = e;
     }
     onSectionChange(e: string){
        this.activeSection = this.activeSection === e ? null: e;
     }
}

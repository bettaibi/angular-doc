import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { SectionsService } from './sections.service';
import { v4 as uuidv4 } from 'uuid';
import { ISection, ITopic } from 'src/app/models/app';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.css']
})
export class SectionsComponent implements OnInit {
    sectionForm: FormGroup;
    sections: ISection[];
    activeSection: string;
    currentTopic: string;

    constructor(
        private fb: FormBuilder,
        private sectionService: SectionsService
    ) {}

    ngOnInit(): void {
        this.sectionForm = this.fb.group({
            name: new FormControl('', [Validators.required]),
            titles: this.fb.array([this.getTitles])
        });
        this.sectionService.getSections().subscribe((data: ISection[])=>{
            this.sections = data;
        });
        this.activeSection = null;
        this.currentTopic = null;
    }

    reinitializeSectionForm(section: ISection): void{
        if(this.activeSection !== null){
            this.sectionForm = this.fb.group({
                name: new FormControl(section.name, [Validators.required]),
                titles: this.fb.array(this.reintializeTitles(section.titles))
            });
        }
        else{
            this.sectionForm = this.fb.group({
                name: new FormControl('', [Validators.required]),
                titles: this.fb.array([this.getTitles])
            });
        }
    }

    get getTitles(): FormGroup{
        return this.fb.group({
            title: new FormControl('', [Validators.required])
        });
    }

    reintializeTitles(titles: ITopic[]): FormGroup[]{
        let array = [];
        for(let item of titles){
            array = [...array, this.fb.group({
                title: new FormControl(item.title, [Validators.required]),
                id: item.id
            })];
        }
        return array;
    }

    deleteTitle(index: number): void{
        (this.sectionForm.get('titles') as FormArray).removeAt(index);
    }

    addTitle(): void{
        (this.sectionForm.get('titles') as FormArray).push(
            this.fb.group({
                id: uuidv4(),
                title: new FormControl('', [Validators.required])
            })
        );
    }

    onSubmit(event: any){
        let sectionToAdd = this.sectionForm.value;
        sectionToAdd.titles = sectionToAdd.titles.map((item: ITopic)=>{
            return {title: item.title, id: uuidv4()}
        });
        this.sectionService.create({...sectionToAdd, id: uuidv4()})
        .subscribe((data: ISection)=>{
           this.sections = [...this.sections, data];
           this.sectionForm.reset();
        });

        event.preventDefault();
    }

    updateSection(): void{
         this.sectionService.update(this.activeSection, {...this.sectionForm.value})
         .subscribe((data: ISection) =>{
             this.sections = this.sections.map((item: ISection)=>{
                 return item.id !== this.activeSection ? item : data ;
             });
         });
    }

    removeSection(): void{
        const result = confirm('Are you sure that you want to remove this section?');
        if(result){
            this.sectionService.remove(this.activeSection)
            .subscribe((data)=>{
                this.sections = this.sections.filter((item: ISection)=>{
                    return item.id !== this.activeSection;
                });
            });
        }
    }

    onTopicChange(e: string){
        this.currentTopic = e;
    }
    onSectionChange(e: string, section: ISection){
        this.activeSection = this.activeSection === e ? null: e;
        this.reinitializeSectionForm(section);
     }
}

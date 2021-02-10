import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DialogService } from '../dialog/dialog.service';
import { SnackbarService } from '../snackbar/snackbar.service';
import { CodePreviewComponent } from './code-preview/code-preview.component';
import { EditorConfig } from './myTextEditor.model';

@Component({
    selector: 'myText-editor',
    templateUrl: './myText-editor.component.html',
    styleUrls: ['./myText-editor.component.css']
})
export class MyTextEditorComponent implements OnInit {
    @Input() public toolbarCustomDesign = '';
    @Input() public Config: EditorConfig;
    @Output() public onContentChange = new EventEmitter<string>();

    @ViewChild('editorContent') public editor: ElementRef;

    _currentTag = 'p';
    _currentClass = 'primary-title';
    private _content: string;

    constructor(
        private dialogService: DialogService,
        private snackbarService: SnackbarService
    ) { }

    ngOnInit(): void { }

    addClass(): void {
        const selection = window.getSelection().getRangeAt(0);
        let selectedText = window.getSelection().toString();
        if(selectedText){
            window.getSelection().focusNode.normalize();
            selection.deleteContents();
            var fragment = selection.createContextualFragment(`<${this._currentTag} class="${this._currentClass}">${selectedText}</${this._currentTag}}>`);
            selection.insertNode(fragment)
        }
    }

    addHtml(): void {
        const selection = window.getSelection().getRangeAt(0);
        let selectedText = window.getSelection().toString();
        if(selectedText){
            window.getSelection().focusNode.normalize();
            selection.deleteContents();
            var fragment = selection.createContextualFragment(`<${this._currentTag}>${selectedText}</${this._currentTag}}>`);
            selection.insertNode(fragment)
        }        
    }

    clear(): void{
        this.editor.nativeElement.innerText= '';
        this._currentTag = 'p';
        this._currentClass = 'primary-title';
    }

    addCode(): void{
        this.snackbarService.open('this is a message', 3000);
    }

    adjustment(): void{
        this.dialogService.open(CodePreviewComponent);
    }

    save(): void{
        this._content = this.editor.nativeElement.innerHTML;
        const clean  = /<[^/>][^>]*><\/[^>]+>/g;
        this._content = this._content.replace(/<br>/g, '');
        this._content = this._content.replace(clean, '');
        this.onContentChange.emit(this._content);
        setTimeout(()=>{
            this.clear();
        }, 0);
    }
}

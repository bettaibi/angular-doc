import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/app';
import { editorConfig } from './editor.config';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
    article: IArticle;

    editorConfig = editorConfig;
    editorContent: string;

    constructor() {
        this.article = {
            body: [],
            created: new Date()
        };
    }

    ngOnInit(): void { }


    onContentChange(content): void{
        console.log(content);
        this.article.body = [...this.article.body, {content: content}]
    }
}

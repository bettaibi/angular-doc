import { Component, OnInit } from '@angular/core';
import { IArticle, Icode } from 'src/app/models/app';
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

    contentExample: Icode;

    constructor() {
        this.article = {
            body: [],
            created: new Date()
        };

        this.contentExample = {
            html:{pageTitle: 'example.component.html', content: '<h1>Article Generator</h1>'},
            scss: {pageTitle: 'example.component.scss', content: 'scss'},
            ts: {pageTitle: 'example.component.ts', content: 'console.log(hi)'}
        }
    }

    ngOnInit(): void {}

    onContentChange(content): void{
        console.log(content);
        this.article.body = [...this.article.body, {content: content}]
    }
}

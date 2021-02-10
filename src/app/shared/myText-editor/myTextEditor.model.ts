

export interface IHtmlElement{
    tag: string;
    description: string;
}

export interface IPredefinedClass{
    name: string;
    class: string;
}

export interface EditorConfig{
    tags: IHtmlElement[];
    customClasses: IPredefinedClass[];
    
}
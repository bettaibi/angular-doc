
export interface codeDetails{
    pageTitle: string;
    content: string;
}
export interface Icode{
    html?: codeDetails;
    scss?: codeDetails;
    ts?: codeDetails;
}

export interface Pargraph{
    content: string;
    code?: Icode;
}

export interface IArticle{
    id?: string;
    created?: Date;
    body: Pargraph[];
}

export interface ITopic{
    id: string;
    title: string;
}

export interface ISection{
    id: string;
    name: string;
    titles: ITopic[];
}


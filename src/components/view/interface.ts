export interface INews {
    urlToImage: string;
    author?: string;
    source: {
        name: string;
    };
    publishedAt?: string;
    title: string;
    description: string;
    url: string;
}
export interface ISource {
    name: string;
    id: string;
}

export interface Draw {
    draw(arg: any): void;
}

export enum Meta {
    author = 'Unknown author',
    title = 'Without title',
    desc = 'See you next page ',
    url = 'Link is not available',
    error401 = 401,
    error404 = 404,
}

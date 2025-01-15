// export interface INews {
//     urlToImage: string;
//     author?: string;
//     source: {
//         name: string;
//     };
//     publishedAt?: string;
//     title: string;
//     description: string;
//     url: string;
// }
// export interface ISource {
//     name: string;
//     id: string;
// }
export interface IInfo {
    name?: string;
    id?: string;
    urlToImage?: string;
    author?: string;
    source?: {
        name: string;
    };
    publishedAt?: string;
    title?: string;
    description?: string;
    url?: string;
}
// export interface Draw {
//     draw(arg: ISource[] | INews[]): void;
// }

export interface Draw {
    draw(arg: IInfo[]): void;
}
export enum Meta {
    author = 'Unknown author',
    title = 'Without title',
    desc = 'See you next page ',
    url = 'Link is not available',
    error401 = 401,
    error404 = 404,
}

export interface Options {
    [params: string]: any;
}

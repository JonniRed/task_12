import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: any): void {
        const values = data?.articles ? data?.articles : alert('No actual news');
        this.news.draw(values);
    }

    drawSources(data: any): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;

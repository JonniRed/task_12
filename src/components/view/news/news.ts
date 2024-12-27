import './news.css';
interface NewsItem {
    urlToImage?: string;
    author?: string;
    source: {
        name: string;
    };
    publishedAt: string;
    title: string;
    description: string;
    url: string;
}

class News {
    draw(data: NewsItem[]): void {
        const news = data.length >= 10 ? data.filter((_item: any, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        news.forEach((item: NewsItem, idx: number) => {
            const newsClone: DocumentFragment | null = newsItemTemp?.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) {
                const newsEl = newsClone.querySelector<HTMLElement>('.news__item');
                newsEl?.classList.add('alt');
            }

            const newsPhoto: HTMLElement | null = newsClone.querySelector<HTMLElement>('.news__meta-photo');

            if (newsPhoto) newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            const newsAuthor: HTMLElement | null = newsClone.querySelector<HTMLElement>('.news__meta-author');
            if (newsAuthor) {
                newsAuthor.textContent = item.author || item.source.name;
            }

            const newsMeta: HTMLElement | null = newsClone.querySelector('.news__meta-date');

            if (newsMeta) {
                newsMeta.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const newsTitle: HTMLElement | null = newsClone.querySelector('.news__description-title');
            if (newsTitle) {
                newsTitle.textContent = item.title;
            }

            const newsDescr: HTMLElement | null = newsClone.querySelector('.news__description-source');
            if (newsDescr) {
                newsDescr.textContent = item.source.name;
            }

            const newsContentDesc: HTMLElement | null = newsClone.querySelector('.news__description-content');
            if (newsContentDesc) {
                newsContentDesc.textContent = item.description;
            }

            const newsReadMore: HTMLElement | null = newsClone.querySelector('.news__read-more a');
            if (newsReadMore) {
                newsReadMore.setAttribute('href', item.url);
            }

            fragment.append(newsClone);
        });

        const newsWrap: HTMLElement | null = document.querySelector<HTMLElement>('.news');
        if (newsWrap) {
            newsWrap.innerHTML = '';
        }

        newsWrap?.appendChild(fragment);
    }
}

export default News;

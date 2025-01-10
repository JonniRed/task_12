import './news.css';
import { INews, Draw } from '../interface';

type NewsItem = INews;

class News implements Draw {
    draw(arg: NewsItem[]): void {
        const news = arg.length >= 10 ? arg.filter((_item: NewsItem, idx: number) => idx < 10) : arg;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        news.forEach((item: NewsItem, idx: number) => {
            const newsClone: DocumentFragment | null = newsItemTemp?.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) {
                const newsEl = newsClone.querySelector<HTMLElement>('.news__item');
                newsEl?.classList.add('alt');
            }

            const newsPhoto: HTMLElement | null = newsClone.querySelector<HTMLElement>('.news__meta-photo');

            if (newsPhoto) {
                newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            const newsAuthor: HTMLElement | null = newsClone.querySelector<HTMLElement>('.news__meta-author');
            if (newsAuthor) {
                newsAuthor.textContent = item?.author || null;
            }

            const newsMeta: HTMLElement | null = newsClone.querySelector('.news__meta-date');

            if (newsMeta) {
                newsMeta.textContent = item.publishedAt?.slice(0, 10).split('-').reverse().join('-') || null;
            }

            const newsTitle: HTMLElement | null = newsClone.querySelector('.news__description-title');
            if (newsTitle) {
                newsTitle.textContent = item?.title || null;
            }

            const newsDescr: HTMLElement | null = newsClone.querySelector('.news__description-source');
            if (newsDescr) {
                newsDescr.textContent = item.source?.name || null;
            }

            const newsContentDesc: HTMLElement | null = newsClone.querySelector('.news__description-content');
            if (newsContentDesc) {
                newsContentDesc.textContent = item?.description || null;
            }

            const newsReadMore: HTMLElement | null = newsClone.querySelector('.news__read-more a');
            if (newsReadMore && item.url) {
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

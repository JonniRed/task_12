import './sources.css';
import { ISource, Meta, Draw } from '../interface';

type Source = ISource;

class Sources implements Draw {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        const source: HTMLElement | null = document?.querySelector('.sources');

        data.forEach((item: Source) => {
            const sourceClone: DocumentFragment | null = sourceItemTemp?.content.cloneNode(true) as DocumentFragment;

            const sourceName = sourceClone.querySelector<HTMLElement>('.source__item-name');
            const header = document.createElement('h2');
            if (sourceName) {
                sourceName.textContent = item.name || Meta.title;
                if (!document.querySelector(`#${sourceName.textContent[0]}`)) {
                    header.id = sourceName.textContent[0];
                    header.textContent = sourceName.textContent[0];
                    fragment.append(header);
                    const container = document.createElement('div');
                    container.id = 'news' + sourceName.textContent[0];
                    fragment.append(container);
                }
            }

            const sourceItem: HTMLElement | null = sourceClone.querySelector('.source__item');
            if (sourceItem && item.id) {
                sourceItem.setAttribute('data-source-id', item.id);
                fragment.append(sourceItem);
            }

            source?.append(fragment);
            // source?.append(fragment);
        });
    }
}

export default Sources;

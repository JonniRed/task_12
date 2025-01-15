import './sources.css';
import { IInfo, Meta, Draw } from '../interface';

class Sources implements Draw {
    draw(data: IInfo[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        const source: HTMLElement | null = document?.querySelector('.sources');

        data.forEach((item: IInfo) => {
            const sourceClone: DocumentFragment | null = sourceItemTemp?.content.cloneNode(true) as DocumentFragment;

            const sourceName = sourceClone.querySelector<HTMLElement>('.source__item-name');
            const header = document.createElement('h2');
            if (sourceName) {
                sourceName.textContent = item.name || Meta.title;

                if (item.name) {
                    const title: string | null = item.name[0];
                    if (!document.querySelector(`#${title}`)) {
                        header.id = item.name[0];
                        header.textContent = item.name[0];
                        fragment.append(header);
                    }
                }
            }

            const sourceItem: HTMLElement | null = sourceClone.querySelector('.source__item');
            if (sourceItem && item.id) {
                sourceItem.setAttribute('data-source-id', item.id);
                fragment.append(sourceItem);
            }

            source?.append(fragment);
        });
    }
}

export default Sources;

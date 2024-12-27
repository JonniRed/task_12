import './sources.css';
interface Source {
    name: string;
    id: string;
}

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        data.forEach((item: Source) => {
            const sourceClone: DocumentFragment | null = sourceItemTemp?.content.cloneNode(true) as DocumentFragment;

            const sourceName = sourceClone.querySelector<HTMLElement>('.source__item-name');
            if (sourceName) {
                sourceName.textContent = item.name;
            }

            const sourceItem: HTMLElement | null = sourceClone.querySelector('.source__item');
            if (sourceItem) {
                sourceItem.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const source: HTMLElement | null = document?.querySelector('.sources');
        source?.append(fragment);
    }
}

export default Sources;

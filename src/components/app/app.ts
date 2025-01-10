import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import Sources from '../view/sources/sources';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        document
            .querySelector('.sources')
            ?.addEventListener('click', (e) => this.controller.getNews(e, (data: AppView) => this.view.drawNews(data)));
        this.controller.getSources((data: Sources) => this.view.drawSources(data));
    }
}

export default App;

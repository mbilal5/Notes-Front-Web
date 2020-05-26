import { Page } from './Page';
import { RepositoryNode } from './RepositoryNode';

class Section extends RepositoryNode {
    id: number;
    title: string;
    pages: Array<Page>;
    pageIdCounter: number;

    constructor(id?: number, title?: string, pages?: Array<Page>)
    {
        super();
        this.id = id ?? 0;
        this.title = title ?? 'Untitled Page';
        this.pages = pages ?? new Array<Page>();
        let maxNumber = 0;
        this.pages.forEach( (page: any) =>
        {
            if (page.id > maxNumber)
                maxNumber = page.id;
        });
        this.pageIdCounter = maxNumber + 1;
    }
  
    appendNewPage()
    {
        let id = this.getNextPageId();
        let page = new Page(id)
        console.log(this);
        this.pages.push(page);
    }

    addPage(page: Page)
    {
        page.id = this.getNextPageId();
        this.pages.push(page);
    }
    removePage(pageId: number)
    {
        throw new Error('removePage not implemented yet');
    }

    private getNextPageId(): number
    {
        return ++this.pageIdCounter;
    }
}

export { Section };
import { Page } from './Page';
import { RepositoryNode } from './RepositoryNode';
import { DataList } from '../lib/DataList';

class Section extends RepositoryNode {
    id: number;
    title: string;
    pages: DataList<Page>;

    constructor(id?: number, title?: string, pages?: Array<Page>)
    {
        super();
        this.id = id ?? 0;
        this.title = title ?? 'Untitled Page';
        this.pages = new DataList<Page>();

        for (let page of pages)
        {
            pages.push(page);
        }
    }
  
    appendNewPage()
    {
        let page = new Page();
        this.pages.push(page);
    }

    addPage(page: Page)
    {
        this.pages.push(page);
    }
    removePage(pageId: number)
    {
        this.pages.remove(pageId);
    }
}

export { Section };
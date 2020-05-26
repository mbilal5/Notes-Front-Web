import { RepositoryNode } from './RepositoryNode';
class PageElement extends RepositoryNode
{
    id: number;
    type: string;
    content: string;
    index: number;
    constructor(elementId?: number, type?: string, content?: string)
    {
        super();
        this.id = elementId ?? 0;
        this.type = type ?? 'p';
        this.content = content;
        this.index = null;
    }

}

export { PageElement };
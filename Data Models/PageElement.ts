import { RepositoryNode } from './RepositoryNode';
class PageElement extends RepositoryNode
{
    id: any;
    type: any;
    content: any;
    index: any;
    constructor(elementId?: any, type?: any, content?: any)
    {
        super();
        this.id = elementId != undefined ? elementId : 0;
        this.type = type != undefined ? type : 'p';
        this.content = content;
        this.index = null;
    }

}

export { PageElement };

import { PageElement } from './PageElement';
import { RepositoryNode } from './RepositoryNode';

class Page extends RepositoryNode {
    id: number;
    title: string;
    elements: Array<PageElement>;
    indexCounter: number;
    elementIdCounter: number;
    constructor(id?: number, title?: string, elements?: Array<PageElement>)
    {
        super();
        this.id = id;
        this.title = title != null ? title : 'Untitled Page';
        this.elements = elements ?? new Array<PageElement>();
        let maxNumber = 0;
        this.indexCounter = 0;
        this.elements.forEach((element: any) =>
        {
            element.index = this.indexCounter++;
            if (element.id > maxNumber)
                maxNumber = element.id;
        });
        this.elementIdCounter = maxNumber + 1;
    }

    appendNewElement()
    {
        let id = this.getNextElementId();
        let element = new PageElement(id);
        element.index = this.indexCounter++;
        this.elements.push(element);
    }

    addElement(type: string, content: string)
    {
        const id = this.getNextElementId();
	    if (type == undefined)
		    type = 'p';
        let element = new PageElement(id, type, content);
        this.elements.push(element);
        element.index = this.indexCounter++;
    }

    addElementAfterIndex(index: number, type = 'p')
    {
        const id = this.getNextElementId();
        let element = new PageElement(id, type);
        this.elements.push(element);
        this.moveElementTo(id, index, true);
        this.elements.sort((a, b) => a.index - b.index);
        return element.index;
    }

    getElement(elementId): PageElement
    {
        return this.elements.find( element => element.id == elementId);
    }

    getElementByIndex(index) : PageElement
    {
        return this.elements.find(element => element.index == index);
    }

    updateElement(elementId: number, content: string)
    {
        let element = this.elements.find( element => element.id == elementId);
        element.content = content;
    }

    deleteElement(elementId: number)
    {
        this.elements = this.elements.filter(element => element.id != elementId);
    }

    moveElementTo(elementId: number, index: number, beforeIndex = false)
    {
        let element = this.getElement(elementId);
        let element2 = this.getElementByIndex(index);
        let factor = beforeIndex ? 1 : -1;
        element.index = index + (0.01*factor);
        element2.index = index - (0.01*factor);
        this.elements.sort((a, b) => a.index - b.index);
    }

    private getNextElementId(): number
    {
        return ++this.elementIdCounter;
    }


}

export { Page };
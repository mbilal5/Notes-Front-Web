
import { PageElement } from './PageElement';
import { RepositoryNode } from './RepositoryNode';
import { DataList } from '../lib/DataList';

class Page extends RepositoryNode {
    id: number;
    title: string;
    elements: DataList<PageElement>;
    indexCounter: number;
    elementIdCounter: number;

    public get Elements(): Array<PageElement>
    {
        return this.elements.getElements();
    }
    constructor(id?: number, title?: string, elements: Array<PageElement> = null)
    {
        super();
        this.id = id;
        this.title = title != null ? title : 'Untitled Page';
        this.elements = new DataList<PageElement>();
        if (elements != null)
        {
            for (let element of elements)
            {
                this.elements.push(element);
            }
        }
    }

    push(type: string = 'p', content: string = '')
    {

        let element = new PageElement(undefined, type, content);
        this.elements.push(element);
    }

    addElement(type: string, content: string)
    {
	    if (type == undefined)
		    type = 'p';
        let element = new PageElement(undefined, type, content);
        this.elements.push(element);
    }

    addElementAfterIndex(index: number, type = 'p')
    {
        let element = new PageElement(undefined, type);
        this.elements.insert(element, index+1);
        return index + 1;
    }

    getElement(elementId): PageElement
    {
        return this.elements.getElement(elementId);
    }

    getElementByIndex(index) : PageElement
    {
        return this.elements.getElementAt(index);
    }

    updateElement(elementId: number, content: string)
    {
        let element = this.elements.getElement(elementId);
        element.content = content;
    }

    deleteElement(elementId: number)
    {
        this.elements.remove(elementId);
    }

    moveElementTo(elementId: number, index: number, beforeIndex = false)
    {
        let element = this.getElement(elementId);
        this.elements.remove(elementId);
        this.elements.insert(element, index);
    }

}

export { Page };
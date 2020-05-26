interface DataElement {
    id: number;
}

class DataList<T extends DataElement>
{
    private elements: Array<T>;
    private idCounter: number;
    constructor()
    {
        this.idCounter = 0;
        this.elements = new Array<T>();
    }

    private nextIdCounter(): number
    {
        return ++this.idCounter;
    }

    get length(): number
    {
        return this.elements.length;
    }

    push(element: T)
    {
        element.id = this.nextIdCounter();
        this.elements.push(element);
    }

    insert(element: T, index: number)
    {
        element.id = this.nextIdCounter();
        let elements = this.elements;
        elements.push(element);
        for (let i = elements.length - 1; i > index; i++)
        {
            if (i > index)
            {
                let t = elements[i];
                elements[i] = elements[i-1];
                element[i-1] = t;
            }
        }
    }

    getElement(id: number) : T
    {
        return this.elements.find(element => element.id == id);
    }

    getElementIndex(id: number)
    {
        return this.elements.findIndex(element => element.id == id);     
    }

    getElementAt(index: number) : T
    {
        return this.elements[index];
    }

    getElements(): Array<T>
    {
        return this.elements;
    }

    removeAt(index: number)
    {
        this.elements.splice(index, 1);
    }
    
    remove(id: number)
    {
        let index = this.getElementIndex(id);
        this.removeAt(index);
    }
}

export {DataList}
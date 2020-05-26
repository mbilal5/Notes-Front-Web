interface DataElement {
    id: number;
}

class List<T extends DataElement>
{
    private elements: Array<T>;
    constructor()
    {
        this.elements = new Array<T>();
    }

    get length(): number
    {
        return this.elements.length;
    }

    push(element: T)
    {
        this.elements.push(element);
    }

    insert(element: T, index: number)
    {
        let elements = this.elements;
        elements.push(element);
        for (let i = elements.length -1; i > index; i++)
        {
            if (i > index)
            {
                let t = elements[i];
                elements[i] = elements[i-1];
                element[i-1] = t;
            }
        }
    }

    getElement(index: number) : T
    {
        return this.elements[index];
    }

    remove(index: number)
    {
        this.elements.splice(index, 1);
    }
}

export {List}
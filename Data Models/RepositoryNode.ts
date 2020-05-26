
class RepositoryNode {
    updateHandler: any;

    constructor() {
        return new Proxy(this, {
            set: (obj: any, property: any, value: any) => {
                obj[property] = value;
                if (this.updateHandler != null) {
                    this.updateHandler(obj, property, value);
                }
                return true;
            }
        });
    }

    addOnUpdatePropertyHandler(eventHandler: any)
    {
        this.updateHandler = eventHandler;
    }
}

export { RepositoryNode };
import { Section } from '../Data Models/Section';
import { Page } from '../Data Models/Page';
import { PageElement } from '../Data Models/PageElement';

class Workspace
{
    constructor(workspace)
    {
        this.id = workspace.id;
        this.title = workspace.title;
        this.sections = workspace.sections;
        this.onDataUpdate = this.onDataUpdate.bind(this);
        
    }

    getSection(sectionId)
    {
        return this.sections.find(section => section.id == sectionId);
    }

    onDataUpdate(obj, property, value)
    {
        let type = obj.constructor.name;
        if (type == 'Section')
            this.updateSection(obj, property, value);
        else if (type == 'Page')
            this.updatePage(obj, property, value);
        else if (type == 'PageElement')
            this.updatePageElement(obj, property, value);
        else
            throw new Error('Could not find suitable element - Workspace.js');
    }

    updateSection(section, property, value)
    {
        //console.log('updating section');
        //console.log(value);
    }

    updatePage(page, property, value)
    {
        //console.log('updating page');
    }

    updatePageElement(element, property, value)
    {
        //console.log('updating element');
    }
}
export { Workspace };
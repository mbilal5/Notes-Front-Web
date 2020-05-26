import {Page} from '../Data Models/Page';
import {PageElement} from '../Data Models/PageElement';
import {Section} from '../Data Models/Section';

let sectionTitles = ["Core Language", "Objects and Types", "Object Oriented Programming"];
let pageTitles = ["Overview", "Terminology", "Exercises"];
let sections = [];
for (let i = 0; i < sectionTitles.length; i++)
{
    let section = new Section(i, sectionTitles[i]);
    for (let j = 0; j < pageTitles.length; j++)
    {
        let page = new Page(j, pageTitles[j]);
        page.push('p', "Hello World!");
        page.push('p', "This is line 2.");
        section.addPage(page);
    }
    sections.push(section);
}

let repository = {
    id: 1,
    title: 'Sample Workspace',
    sections: sections,
};


export {repository};
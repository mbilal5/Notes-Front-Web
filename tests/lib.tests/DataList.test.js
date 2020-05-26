import {DataList} from '../../lib/DataList'

describe('adding and remove elements', () => {
    let list = new DataList();
    
    test('add item', () => {
        let element = {content: 'Element 1'};
        list.push(element);
        expect(list.length).toBe(1);
    });

    test('remove item', () => {
        let element2 = {content: 'Element 2'};
        list.push(element2);
        list.removeAt(0);
        expect(list.getElementAt(0)).toBe(element2);
    });
});
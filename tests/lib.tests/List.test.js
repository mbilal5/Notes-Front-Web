import {List} from '../../lib/List'

describe('adding and remove elements', () => {
    let list = new List();
    
    test('add item', () => {
        let element = {id: 3};
        list.push(element);
        expect(list.length).toBe(1);
    });

    test('remove item', () => {
        let element2 = {id: 4};
        list.push(element2);
        list.remove(0);
        expect(list.getElement(0)).toBe(element2);
    });
});
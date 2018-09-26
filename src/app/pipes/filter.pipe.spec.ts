import {FilterPipe} from './filter.pipe';

describe('FilterPipe', () => {
  let filterPipe: FilterPipe;

  beforeEach(() => {
    filterPipe = new FilterPipe();
  });

  it('check if defined', () => {
    expect(filterPipe).toBeTruthy();
    expect(filterPipe).toBeDefined();
  });

  it('should return items if field is null', () => {
    const items = [];
    items.push({id: 1, name: 'Vinod'});

    const filtered = filterPipe.transform(items, null, 'Vinod');
    expect(filtered).toEqual(items);
  });

  it('should return items if value is null', () => {
    const items = [];
    items.push({id: 1, name: 'Vinod'});

    const filtered = filterPipe.transform(items, 'name', null);
    expect(filtered).toEqual(items);
  });

  it('should return empty array, if no items passed', () => {
    const items = [];

    const filtered = filterPipe.transform(items, 'name', 'Vinod');
    expect(filtered).toEqual([]);
  });

  it('should filter correctly', () => {
    const items = [];
    items.push({id: 1, name: 'Arun'});
    items.push({id: 2, name: 'Akash'});
    items.push({id: 3, name: 'Arun'});
    items.push({id: 4, name: 'Praveen'});
    items.push({id: 5, name: 'Vinod'});

    const filtered = filterPipe.transform(items, 'name', 'Arun');
    expect(filtered.length).toBe(2);
  });

  it('should filter only one', () => {
    const items = [];
    items.push({id: 1, name: 'Arun'});
    items.push({id: 2, name: 'Akash'});
    items.push({id: 3, name: 'Arun'});
    items.push({id: 4, name: 'Praveen'});
    items.push({id: 5, name: 'Vinod'});

    const filtered = filterPipe.transform(items, 'name', 'Vinod');
    expect(filtered.length).toBe(1);
  });

});

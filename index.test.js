
const { map, filter, findIndex, reduce } = require('./index');


describe('array methods tests', () => {
  
  it('returns a mapped array', () => {
    const array = [1, 2, 3];
    const mapped = map(array, number => number * 2);
    expect(mapped).toEqual(expect.any(Array));

  });

  it('returns an array', () => {
    const array = ['red', 'green', 'blue', 'yellow'];
    const filtered = filter(array, color => color.includes('l'));
    expect(filtered).toEqual(expect.any(Array));
  });

  it('returns a filtered array', () => {
    const array = [1, 2, 3];
    const filtered = filter(array, number => number % 2 === 0);
    expect(filtered).toEqual(expect.any(Array));
  });

  it('filters out odd numbers', () => {
    const array = [1, 2, 3, 4];
    const evens = filter(
      array, number => number % 2 === 0);
    expect(evens).toEqual([2, 4]);
  });

  it('returns an number using findIndex', () => {
    const array = ['red', 'green', 'blue', 'yellow'];
    const foundIndex = findIndex(array, color => color === 'blue');
    expect(foundIndex).toEqual(2);
  });

  it('iterates through an array and invokes the callback', () => {
    const numbers = [1, 2, 3];
    const callback = jest.fn();

    reduce(numbers, callback, 0);

    expect(callback).toHaveBeenCalledTimes(numbers.length);
  });
  
  it('iterates through an array and updates the acc with with results of callback', () => {
    const numbers = [1, 2, 3];
    const sum = reduce(numbers, (acc, item) => acc + item, 0);
    expect(sum).toEqual(6);
  });

  it('iterates through an array and updates the acc with with results of callback', () => {
    const numbers = [1, 2, 3];
    const sum = reduce(numbers, (acc, item) => acc + item, 0);
    expect(sum).toEqual(6);
  });

  


});


const { map, filter, findIndex } = require('./index');


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

  it('returns an number using find number', () => {
    const array = ['red', 'green', 'blue', 'yellow'];
    const foundIndex = findIndex(array, color => color === 'blue');
    expect(foundIndex).toEqual(2);



  });
  
});


const { map, filter } = require('./index');


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

  
});


const map = require('./index');



const array = ['hammer', 'nail', 'screwdriver', 'screw'];

describe('array function tests', () => {
  it('tests map function', () => {
    const callback = (item) => { 
      return item; 
    };
    const mapper = map(array, callback);
    expect(mapper).toEqual(['hammer', 'nail', 'screwdriver', 'screw']);

  });

});

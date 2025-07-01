'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return an arr with strings
    with an original length `, () => {
    expect(arrayReverse(['Mate', 'Academy'])[0].length).toBe(4);
    expect(arrayReverse(['Mate', 'Academy'])[1].length).toBe(7);
  });

  it(`should return right res`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should work right with single el`, () => {
    expect(arrayReverse(['Mate'])).toEqual(['etaM']);
  });

  it(`should work right with a lot of elements`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});

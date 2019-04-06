import assert from 'assert';

import format from '../src/index';

describe('format', () => {
  it('undefinded value', () => {
    assert.equal("0,00", format(undefined));
  });
  it('default params', () => {
    assert.equal("2,56", format(2.555));
  });
  it('default params with thousands', () => {
    assert.equal("10.000,556", format(10000.5555, 3));
  });
  it('default params with thousands and million', () => {
    assert.equal("1.000.000,556", format(1000000.5555, 3));
  });
  it('with params', () => {
    assert.equal("100.000,28", format(100000.28374, 2, ",", "."));
  });
  it('with different decpoint and thousands', () => {
    assert.equal("100,000.6", format(100000.55555, 1, ".", ","));
  });
  it('padding', () => {
    assert.equal("1,5550000000", format(1.555, 10, ",", "."));
  });
  it('negative', () => {
    assert.equal("-1,5555", format(-1.55555, 4));
  });
  it('negative string', () => {
    assert.equal("-1,5555", format("-1.55555", 4));
  });
  it('without round', () => {
    assert.equal("1,555", format(1.55555, 3, ",", ".", false));
  });
  it('string input', () => {
    assert.equal("1,56", format("1.5555", 2));
  });
  it('check round up', () => {
    assert.equal("100.000,284", format(100000.28374, 3));
  });
  it('check round down', () => {
    assert.equal("100.000,28", format(100000.28374));
  });
  it('precision 1', () => {
    assert.equal("100,000.6", format(100000.55, 1, ".", ","));
  });
  it('precision 2', () => {
    assert.equal("100,000.56", format(100000.555, 2, ".", ","));
  });
  it('precision 3', () => {
    assert.equal("100,000.556", format(100000.55554, 3, ".", ","));
  });
  it('precision 4', () => {
    assert.equal("100,000.5555", format(100000.55554, 4, ".", ","));
  });
  it('precision 0 round up', () => {
    assert.equal("1", format(0.555, 0, ".", ","));
  });
  it('default round up', () => {
    assert.equal("0,56", format(0.555));
  });
  it('precision 3', () => {
    assert.equal("10.000,556", format(10000.5555, 3));
  });
  it('invalid string for parse float', () => {
    assert.equal("0,0", format("0,555", 1));
  });
  it('string with parse float', () => {
    assert.equal("1,56", format("1.5555"));
  });
  it('precision 1 round up', () => {
    assert.equal("1,6", format(1.55, 1));
  });
  it('precision 2 round up', () => {
    assert.equal("1,56", format(1.555, 2));
  });
  it('negative values', () => {
    assert.equal("-1,55", format(-1.555));
  });
  it('0 padding', () => {
    assert.equal("1,5550000000", format(1.555, 10));
  });
  it('check value 0', () => {
    assert.equal("0", format(0, 0));
  });
  it('no params', () => {
    assert.equal("0,00", format());
  });
  it('independent params .', () => {
    assert.equal("100.000.556", format(100000.55554, 3, ".", "."));
  });
  it('independent params ,', () => {
    assert.equal("100,000,556", format(100000.55554, 3, ",", ","));
  });
  it('negative 0', () => {
    assert.equal("0,000", format(-0.00001, 3, ",", ","));
  });
  it('negative 0', () => {
    assert.equal("0,000", format(-0.00001, 3, ",", ","));
  });
});

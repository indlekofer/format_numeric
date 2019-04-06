import assert from 'assert';

import { pad } from '../src/index';

describe('pad', () => {
  it('default params', () => {
    assert.equal("02", pad(2));
  });
  it('with params', () => {
    assert.equal("002", pad(2, 3));
  });
  it('with params', () => {
    assert.equal("020", pad(20, 3));
  });
  it('with negative value', () => {
    assert.equal("-020", pad(-20, 3));
  });
  it('ignore floats', () => {
    assert.equal("20.55", pad(20.55, 3));
  });
  it('ignore floats', () => {
    assert.equal("20.55", pad(20.55, 5));
  });
});

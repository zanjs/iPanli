'use strict';

const base64 = require('..');

describe('base64 ecode', () => {
  it('ecode zanjs', () => {
    expect(base64.encode('zanjs')).toBe('emFuanM=');
  })

  it('ecode zanjs2019', () => {
    expect(base64.encode('zanjs2019')).toBe('emFuanMyMDE5');
  })

  it('decode emFuanMyMDE5', () => {
    expect(base64.decode('emFuanMyMDE5')).toBe('zanjs2019');
  })

  it('ecode panli@zz&', () => {
    expect(base64.encode('panli@zz&')).toBe('cGFubGlAenom');
  })

  it('decode cGFubGkyMDE5', () => {
    expect(base64.decode('cGFubGkyMDE5')).toBe('panli2019');
  })
});

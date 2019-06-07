/* global it, describe, expect */
import App from '../../helpers/doIContainValidData';

describe('valid data check.', () => {
  it('returns false for a falsy value.', async () => {
    const result = await App('');
    expect(result).toEqual(false);
  });

  it('returns false for an empty array.', async () => {
    const result = await App([]);
    expect(result).toEqual(false);
  });

  it('returns false for an empty object.', async () => {
    const result = await App({});
    expect(result).toEqual(false);
  });

  it('returns true for a non-empty object.', async () => {
    const result = await App({ event: 'Reception ' });
    expect(result).toEqual(true);
  });

  it('returns true for a string.', async () => {
    const result = await App('Our reception will take place on...');
    expect(result).toEqual(true);
  });
});

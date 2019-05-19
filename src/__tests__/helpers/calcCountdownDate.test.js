/* global it, describe, expect */

import App from '../../helpers/calcCountdownDate';

describe('calcCountdownDate.', () => {
  it('should be a function.', () => {
    expect(App).toBeInstanceOf(Function);
  });

  it('should return the difference in days between two dates.', () => {
    const result = App('19 October 2019', '11 April 2019');
    expect(result).toEqual(191);
  });
});

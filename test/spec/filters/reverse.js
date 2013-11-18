'use strict';

describe('Filter: reverse', function () {

  // load the filter's module
  beforeEach(module('.App'));

  // initialize a new instance of the filter before each test
  var reverse;
  beforeEach(inject(function ($filter) {
    reverse = $filter('reverse');
  }));

  it('should return the input prefixed with "reverse filter:"', function () {
    expect(reverse("abcd")).toBe("dcba");
  });

});

var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
        return classes.split(' ').indexOf(cls) !== -1;
    });
};

describe('a static email', function() {
  beforeEach(function () {
    browser.driver.get('http://protractor-no-angular.dev');
  });

  it('should have a title', function() {
    expect(browser.driver.getTitle()).toEqual('Email Builder Test');
  });

  it('should not have a class on the body', function(){
    expect(hasClass(browser.driver.findElement(by.tagName('body')), 'testFailer')).toBe(false);
  });

  it('should have a properly sized header', function(){
    expect(browser.driver.findElement(by.className('h1')).getCssValue('fontSize')).toBe('20px');
  });
});

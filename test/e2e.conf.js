exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['unit/demo.spec.js'],
  capablilities: {
    'browserName': 'chrome'
  }
};

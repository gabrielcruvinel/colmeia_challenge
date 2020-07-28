let connection = require('../db.js')
let meanHeight = require('../libs/meanHeight.js')
const Parse = connection()

test('Thist test must return a number', async () => {
    return meanHeight(Parse).then(data => {
      expect(typeof data).toBe('number');
    });
  });
  
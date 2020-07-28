let connection = require('../db.js')
let speciesLife = require('../libs/speciesLife.js')
const Parse = connection()

test('Thist test must return a string', async () => {
    return speciesLife(Parse).then(data => {
      expect(typeof data).toBe('string');
    });
  });
  
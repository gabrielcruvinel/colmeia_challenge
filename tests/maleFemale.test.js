let connection = require('../db.js')
let maleFemale = require('../libs/maleFemale.js')
const Parse = connection()

test('Thist test must return a string', async () => {
    return maleFemale(Parse).then(data => {
      expect(typeof data).toBe('string');
    });
  });
  
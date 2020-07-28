const language = require('../libs/language.js');
let connection = require('../db.js')
const Parse = connection()

test('This test must return a string', async () => {
    return language(Parse).then(data => {
      expect(typeof data).toBe('string');
    });
  });
  


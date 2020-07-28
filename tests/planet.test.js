let connection = require('../db.js')
let qtdCharsPlanet = require('../libs/planet.js')
const Parse = connection()

test('Thist test must return a string', async () => {
    return qtdCharsPlanet(Parse).then(data => {
      expect(typeof data).toBe('number');
    });
  });
  
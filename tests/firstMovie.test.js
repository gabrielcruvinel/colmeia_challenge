const firstMovie = require('../libs/firstMovie.js');
let connection = require('../db.js')
const Parse = connection()

test('the first movie released must be A new hope', async () => {
    return firstMovie(Parse).then(data => {
      expect(data).toBe('A New Hope');
    });
  });
  


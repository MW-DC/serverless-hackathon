const assert = require('assert');
const Supertest = require('supertest');
const supertest = Supertest(process.env.BASE_URL);
const childProcess = require('child_process');

describe('system tests', () => {
  it('hello-theaifam5: should print a name', async () => {
    await supertest
      .post('/hello-theaifam5')
      .send({name: 'TheAifam5'})
      .expect(200)
      .expect(response => {
        assert.strictEqual(response.text, 'Hello TheAifam5!');
      });
  });
})

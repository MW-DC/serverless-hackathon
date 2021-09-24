const assert = require('assert');
const sinon = require('sinon');
const uuid = require('uuid');

const helloTheAifam5 = require('..')['hello-theaifam5'];

it('hello-theaifam5: should print a name', () => {
  // Mock ExpressJS 'req' and 'res' parameters
  const name = uuid.v4();
  const req = {
    query: {},
    body: {
      name: name,
    },
  };
  const res = {send: sinon.stub()};

  // Call tested function
  helloTheAifam5(req, res);

  // Verify behavior of tested function
  assert.ok(res.send.calledOnce);
  assert.deepStrictEqual(res.send.firstCall.args, [`Hello ${name}!`]);
});

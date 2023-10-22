const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../backend-a'); //Express app file

chai.use(chaiHttp);
const expect = chai.expect;

describe('Backend A API', () => {
  it('should respond with "Hello from Backend A, Versi 1.0.1!"', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello from Backend A, Versi 1.0.1!');
        done();
      });
  });
});

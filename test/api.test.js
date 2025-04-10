const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // ou ton fichier principal express

chai.use(chaiHttp);
const expect = chai.expect;

describe('API Test', () => {
  it('GET /api/users should return all users', (done) => {
    chai.request(app)
      .get('/api/users')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});

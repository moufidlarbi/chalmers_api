
import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../src/index';

chai.use(chatHttp)
const { expect } = chai;

describe('Testing the services endpoints:', () => {
    it('It should get all services', (done) => {
    chai.request(app)
      .get('/services')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
          res.body[0].should.have.property('servicename');
          res.body[0].should.have.property('serviceaddress');
          res.body[0].should.have.property('servicecity');
          res.body[0].should.have.property('servicestate');
          res.body[0].should.have.property('servicezip');
          res.body[0].should.have.property('servicephone');
          res.body[0].should.have.property('servicecityid');
          done();
        });
    });

    it('It should get a particular service', (done) => {
      const serviceId = 1;
      chai.request(app)
        .get(`/services/${serviceId}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
          console.log('body',res.body)
          expect(res.status).to.equal(200);
          res.body.should.have.property('servicename');
          res.body.should.have.property('serviceaddress');
          res.body.should.have.property('servicecity');
          res.body.should.have.property('servicestate');
          res.body.should.have.property('servicezip');
          res.body.should.have.property('servicephone');
          res.body.should.have.property('servicecityid');
          done();
        });
    });
})


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
          res.body[0].should.have.property('servicetypeid');
          done();
        });
    });

    it('It should get all services in a specific city', (done) => {
      const serviceId = 1;
      chai.request(app)
        .get(`/services/${serviceId}`)
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
          res.body[0].should.have.property('servicetypeid');
          done();
        });
    });

    it('It should get a specific service in a specific city', (done) => {
      const serviceId = 1;
      const serviceTypeId = 1;
      chai.request(app)
        .get(`/services/${serviceId}/${serviceTypeId}`)
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
          res.body[0].should.have.property('servicetypeid');
          done();
        });
    });

    it('It should create an error flag', (done) => {
      const payload = {
        serviceId: 1,
        errorText: 'Wrong address'
      };
      chai.request(app)
        .post('/services/flagerror')
        .set('Accept', 'application/json')
        .send(payload)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.include({
            error: false
          });
          done();
        });
    });

})

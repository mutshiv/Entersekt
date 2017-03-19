var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('TodoListItems', function() {
  it('should list ALL item of the todo list on /todo GET', function(done) {
	  chai.request(server)
		.get('/todo')
		.end(function(err, res){
		  res.should.have.status(200);
		  res.body.should.be.a('array');
		  done();
		});
	});
  it('should add a SINGLE item on /todo/add/ POST');
  it('should update a SINGLE blob on /todo/edit/ POST');
  it('should update a SINGLE blob on /todo/delete/<id> DELETE');
});
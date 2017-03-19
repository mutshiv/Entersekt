var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('TodoListItems LIST items', function() {
  it('Display all the items /todo GET', function(done) {
	  chai.request('http://localhost:8080')
		.get('/todo')
		.end(function(err, res){
		  console.log(res.body.h1 + " list");
		  res.should.have.status(200);
		  done();
		});
	});
});

describe('TodoListItems ADD', function() {
  it('ADD a new item to the list /todo/add/ POST', function(done) {
	  chai.request('http://localhost:8080')
		.post('/todo/add')
		.set('content-type', 'application/x-www-form-urlencoded')
		.send({newtodo: 'Mocha chai test index 9'})
		.end(function(err, res){
		  console.log(res.body);
		  res.should.have.status(200);
		  done();
		});
	});
 /* it('Update selected item on the list /todo/edit/ POST', function(done) {
	  chai.request('http://localhost:8080')
		.post('/todo/edit')
		.set('content-type', 'application/x-www-form-urlencoded')
		.send({todoid: 0, newtext: 'Mocha chai test updated 1'})
		.end(function(err, res){
		  console.log(res.body);
		  res.should.have.status(200);
		  done();
		});
	});
  it('Delete selected item /todo/delete/<id> DELETE', function(done) {
	  chai.request('http://localhost:8080')
		.get('/todo/')
		.end(function(err, res){
		chai.request(server)
		.delete('/todo/delete/' + res.body.index)
		  console.log(res.body.todolist);
		  res.should.have.status(200);
		  done();
		});
	});*/
});
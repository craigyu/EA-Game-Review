const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const chai_expect = chai.expect;
const server = 'http://localhost:5000';
const data = require('./testData');

describe('Testing User API', () => {
  test('GET users should return 2 users', (done) => {
    chai.request(server).get('/user')
      .set('content-type', 'application/json')
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(200);
        chai_expect(res.body.length).to.equal(2);
        done();
      });
  });

  // Not sure if this is needed
  // test('DELETE user should return error', (done) => {
  //   chai.request(server).del('/user')
  //     .set('content-type', 'application/json')
  //     .end((err, res) => {
  //       console.log(err);
  //       chai_expect(err).to.be.null;
  //       chai_expect(res.status).to.equal(404);
  //       done();
  //     });
  // });
});

describe('Testing Blog API', () => {
  test('GET blog should return 1 blog', (done) => {
    chai.request(server).get('/blog')
      .set('content-type', 'application/json')
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(200);
        chai_expect(res.body.length).to.equal(1);
        done();
      });
  });

  test('POST a blog should succeed', (done) => {
    chai.request(server).post('/blog')
      .set('content-type', 'application/json')
      .send(data.blog)
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(201);
        done();
      });
  });

  test('GET blog should now return 2 blogs', (done) => {
    chai.request(server).get('/blog')
      .set('content-type', 'application/json')
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(200);
        chai_expect(res.body.length).to.equal(2);
        done();
      });
  });

  test('POST a blog without title should fail', (done) => {
    chai.request(server).post('/blog')
      .set('content-type', 'application/json')
      .send(data.blog_no_title)
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(400);
        done();
      });
  });

  test('POST a blog without user_id should fail', (done) => {
    chai.request(server).post('/blog')
      .set('content-type', 'application/json')
      .send(data.blog_no_user)
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(400);
        done();
      });
  });

  test('POST a blog without content should fail', (done) => {
    chai.request(server).post('/blog')
      .set('content-type', 'application/json')
      .send(data.blog_no_content)
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(400);
        done();
      });
  });


  test('POST a blog with empty content should fail', (done) => {
    chai.request(server).post('/blog')
      .set('content-type', 'application/json')
      .send(data.blog_empty_content)
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(400);
        done();
      });
  });

  test('POST a blog with empty title should fail', (done) => {
    chai.request(server).post('/blog')
      .set('content-type', 'application/json')
      .send(data.blog_empty_title)
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(400);
        done();
      });
  });

  test('POST a blog with invalid user_id should fail', (done) => {
    chai.request(server).post('/blog')
      .set('content-type', 'application/json')
      .send(data.blog_bad_user)
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(400);
        done();
      });
  });
});


describe('Testing Comment API', () => {
  test('GET comment should return 1 comment', (done) => {
    chai.request(server).get('/comment/1')
      .set('content-type', 'application/json')
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(200);
        chai_expect(res.body.length).to.equal(1);
        done();
      });
  });

  test('POST a comment should succeed', (done) => {
    chai.request(server).post('/comment')
      .set('content-type', 'application/json')
      .send(data.comment)
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(201);
        done();
      });
  });

  test('GET comment should now return 2 comments', (done) => {
    chai.request(server).get('/comment/1')
      .set('content-type', 'application/json')
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(200);
        chai_expect(res.body.length).to.equal(2);
        done();
      });
  });

  test('POST a comment without user_id should fail', (done) => {
    chai.request(server).post('/comment')
      .set('content-type', 'application/json')
      .send(data.comment_no_user)
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(400);
        done();
      });
  });

  test('POST a comment without content should fail', (done) => {
    chai.request(server).post('/comment')
      .set('content-type', 'application/json')
      .send(data.comment_no_content)
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(400);
        done();
      });
  });

  test('POST a comment without blog-id should fail', (done) => {
    chai.request(server).post('/comment')
      .set('content-type', 'application/json')
      .send(data.comment_no_blog)
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(400);
        done();
      });
  });

  test('POST a comment with invalid user_id should fail', (done) => {
    chai.request(server).post('/comment')
      .set('content-type', 'application/json')
      .send(data.comment_bad_user)
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(400);
        done();
      });
  });

  test('POST a comment with empty content should fail', (done) => {
    chai.request(server).post('/comment')
      .set('content-type', 'application/json')
      .send(data.comment_empty_content)
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(400);
        done();
      });
  });

  test('POST a comment with empty user_id should fail', (done) => {
    chai.request(server).post('/comment')
      .set('content-type', 'application/json')
      .send(data.comment_empty_user)
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(400);
        done();
      });
  });

  test('POST a comment with invalid blog_id should fail', (done) => {
    chai.request(server).post('/comment')
      .set('content-type', 'application/json')
      .send(data.comment_bad_blog)
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(400);
        done();
      });
  });
});
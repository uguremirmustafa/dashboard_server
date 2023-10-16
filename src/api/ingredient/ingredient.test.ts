import app from '@/app';
import request from 'supertest';

beforeAll(async () => {
  const testUser = {
    email: 'uguremirmustafa2@gmail.com',
    password: 'ugur123',
  };
  await request(app)
    .post('/api/auth/login')
    .send(testUser)
    .expect(200)
    .then((response) => {
      console.log(response.body);
    });
});

describe('ingredient routes', () => {
  describe('GET /api/ingredient', () => {
    describe('given an authenticated request', () => {
      it('responds with an array of ingredients', async () => {
        await request(app)
          .post('/api/ingredient')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then((response) => {
            expect(response.body).toHaveProperty('length');
          });
      });
    });
    // describe('given no email provided', () => {
    //   it('responds with an error message', async () => {
    //     await request(app)
    //       .post('/api/auth/register')
    //       .set('Accept', 'application/json')
    //       .send({
    //         password: 'topsecret',
    //       })
    //       .expect('Content-Type', /json/)
    //       .expect(422)
    //       .then((response) => {
    //         expect(response.body).toHaveProperty('message');
    //       });
    //   });
    // });
    // describe('given email and a password provided', () => {
    //   it('responds with a user object', async () => {
    //     const userCredientials = {
    //       email: 'feyzanurbulutt@gmail.com',
    //       password: 'topsecret',
    //     };
    //     await request(app)
    //       .post('/api/auth/register')
    //       .set('Accept', 'application/json')
    //       .send(userCredientials)
    //       .expect('Content-Type', /json/)
    //       .expect(200)
    //       .then((response) => {
    //         console.log(response.body);
    //         expect(response.body).toBe(userCredientials);
    //       });
    //   });
    // });
  });
});

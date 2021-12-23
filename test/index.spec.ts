 import app, { server } from '../src/index'
 import supertest from 'supertest'

const api = supertest(app)

afterAll(() => {
    server.close();
})

describe("GET Prime numbers", () => {
    test('should response status code 200', async () => {
        await api.get('/primes/15').expect(200)
    })

    test('prime numbers', async () => {
        await api.get('/primes/asd').expect(400)
    })
})

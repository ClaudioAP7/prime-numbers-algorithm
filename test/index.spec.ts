 import app, { server } from '../src/index'
 import supertest from 'supertest'
 import { validateInput }  from '../src/middleware/validate'
 import generatePrimeNumbers from '../src/controllers/generatePrime'

const api = supertest(app)

const ERROR_CASES_MOCK = {
    InvalidValue: 'Input value must be greater than or equal to 2',
    ValueNotNumber: 'Invalid input value',
}
const GENERATE_PRIME_MOCK = [97,89,83,79,73,71,67,61,59,53,47,43,41,37,31,29,23,19,17,13,11,7,5,3,2]

beforeAll(async () => {
})

afterAll(() => {
    server.close()
})

beforeEach(() => {
    jest.restoreAllMocks()
})

describe("GET Prime numbers", () => {
    it('should response status code 200', async () => {
        await api.get('/primes/15').expect(200)
    })

    it('should response prime numbers', () => {
        api.get('/primes/100').end((err, res) => {
            expect(res.body).toEqual(GENERATE_PRIME_MOCK)
            expect(res.status).toBe(200)
        })
    })

    it('should response status code 400', async () => {
        await api.get('/primes/test').expect(400)
        await api.get('/primes/1').expect(400)
        await api.get('/primes/10.5').expect(400)
    })

    it('should response error invalid input value [string]', () => {
        api.get('/primes/test').end((err, res) => {
            expect(res.text).toEqual(ERROR_CASES_MOCK.ValueNotNumber)
            expect(res.status).toBe(400)
        })
    })

    it('should response error invalid input value [decimal]', () => {
        api.get('/primes/10.5').end((err, res) => {
            expect(res.text).toEqual(ERROR_CASES_MOCK.ValueNotNumber)
            expect(res.status).toBe(400)
        })
    })

    it('should response error invalid input value [special characters]', () => {
        api.get('/primes/$$').end((err, res) => {
            expect(res.text).toEqual(ERROR_CASES_MOCK.ValueNotNumber)
            expect(res.status).toBe(400)
        })
    })

    it('should response error input value must be greater than or equal to 2', () => {
        api.get('/primes/1').end((err, res) => {
            expect(res.text).toEqual(ERROR_CASES_MOCK.InvalidValue)
            expect(res.status).toBe(400)
        })
    })

    it('should response error input value must be greater than or equal to 2 [negative number]', () => {
        api.get('/primes/-10').end((err, res) => {
            expect(res.text).toEqual(ERROR_CASES_MOCK.InvalidValue)
            expect(res.status).toBe(400)
        })
    })

    it('should validate params value', () => {
        const req: any = {
            params: {
                number: 15
            }
        }
        const res: any = { status: jest.fn(), send: jest.fn() }
        const next = jest.fn()


        validateInput(req, res, next)
        expect(next).toHaveBeenCalled()
    })

    it('should return prime numbers list', () => {
        const primeResult = generatePrimeNumbers(100);
        expect(primeResult).toEqual(GENERATE_PRIME_MOCK)
    })

})

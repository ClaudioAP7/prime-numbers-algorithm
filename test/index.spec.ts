 import app, { server } from '../src/index'
 import supertest, { Request, Response } from 'supertest'
 import { validateInput }  from '../src/middleware/validate'
 import generatePrimeNumbers, { primes } from '../src/controllers/generatePrime'
 //import { Request, Response, NextFunction } from 'express'

const api = supertest(app)

// const mockRequest = (number) => {
//     return {
//       params: { number: number },
//     }
// }

const mockResponse = () => {
    const res: any = {}
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
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

    it('should response status code 400', async () => {
        await api.get('/primes/test').expect(400)
        await api.get('/primes/1').expect(400)
        await api.get('/primes/10.5').expect(400)
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

    it('should call nexddt', () => {
        const req: any = {
            params: {
                number: 1
            }
        }
        const res: any = {
            status: jest.fn(() => 400),
            send: jest.fn(() => 400)
        }
        validateInput(req, res, () => {});
    
        expect(res.status).toBe(400)
    })

    it('should return prime numbers list', () => {
        const primeResult = generatePrimeNumbers(100);
        expect(primeResult).toEqual(GENERATE_PRIME_MOCK)
    })

    it('sdasds', async () => {
        //api.get('/primes/test').
        const req: any = {
            params: {
                number: 15
            }
        }
        const res: any = { status: jest.fn(), send: '' }
        
        //const sp1 = jest.spyOn(primes, 'getPrimes').mockImplementation(() => { status: 200 })
        // const mReq = {};
        // const mRes = { get: jest.fn(), status: jest.fn() };
        // const res: any = { status: jest.fn().mockReturnThis(), send: jest.fn() }
        // mRes.get.mockImplementation((path, callback) => {
        //       callback(mReq, mRes);
        //   });
        const response = await primes.getPrimes(req, res)
        expect(response).toBe(200)
    })
})

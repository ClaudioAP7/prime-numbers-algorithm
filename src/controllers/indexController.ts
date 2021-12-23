import { Request, Response } from 'express'

class IndexController {
    public index(req: Request, res: Response) {
        const inputValue = Number(req.params.number)
        const primeNumberResult = generatePrime(inputValue)
        res.status(200).send(primeNumberResult)
    }
}

const generatePrime = (numberValue: number) => {
    let primes = []
    let existPrimes = []

    for(let i = 1; i <= numberValue + 1; ++i){
        existPrimes.push(true)
    }

    for(let i = 2; i <= numberValue; ++i){
        if (existPrimes[i]) {
            primes.push(i)
            for (let j = 1; j * i <= numberValue; ++j) {
                existPrimes[i * j] = false
            }
        }
    }

    return primes.sort((a, b) => b - a)
}

export const indexController = new IndexController()
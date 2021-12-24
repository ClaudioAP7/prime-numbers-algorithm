import { Request, Response } from 'express'

class Primes {
    public getPrimes(req: Request, res: Response) {
        const number = Number(req.params.number)
        const primeNumberList = generatePrimeNumbers(number)
        return res.status(200).send(primeNumberList)
    }
}

const generatePrimeNumbers = (numberValue: number) => {
    let numberList = []
    let primeElements = []

    for(let index = 1; index <= numberValue + 1; ++index){
        primeElements.push(true)
    }

    for(let index = 2; index <= numberValue; ++index){
        if (primeElements[index]) {
            numberList.push(index)
            for (let subIndex = 1; subIndex * index <= numberValue; ++subIndex) {
                primeElements[index * subIndex] = false
            }
        }
    }

    return numberList.sort((a, b) => b - a)
}

export const primes = new Primes()
export default generatePrimeNumbers
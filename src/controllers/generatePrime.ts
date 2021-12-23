import { Request, Response } from 'express'

class IndexController {
    public index(req: Request, res: Response) {
        const number = Number(req.params.number)
        const primeNumberList = generatePrime(number)
        res.status(200).send(primeNumberList)
    }
}

const generatePrime = (numberValue: number) => {
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

export const indexController = new IndexController()
export default generatePrime
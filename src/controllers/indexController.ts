import { Request, Response } from 'express'
//import { generarPrimos } from './utils'

class IndexController {
    public index(req: Request, res: Response) {
        //console.log(generarPrimos(15))
        const primeNumberResult = generatePrime(15)
        res.send(primeNumberResult)
    }
}

const generatePrime = (numberValue: number) => {
    //if(!isNaN(number) && typeof number == 'number'){
        if(numberValue >= 2) {
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
        } else {
            return 'El numero debe ser mayor o igual a 2'
        }
    // } else {
    //     return 'El argumento debe ser un numero entero'
    // }
}

export const indexController = new IndexController()
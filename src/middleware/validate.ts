import { Request, Response, NextFunction } from 'express'

export const validateInput = (req: Request, res: Response, next: NextFunction) => {
    const inputValue = req.params.number

    if(+inputValue === parseInt(inputValue, 10)) {
        if(+inputValue >= 2) {
            next()
        } else {
            res.status(400).send('Input value must be greater than or equal to 2')            
        }
    } else {
        res.status(400).send('Invalid input value')
    }
}
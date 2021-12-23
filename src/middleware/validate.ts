import { Request, Response, NextFunction } from 'express'

export const validateInput = (req: Request, res: Response, next: NextFunction) => {
    const inputValue = req.params.number
    if(typeof inputValue == 'number') {
        next()
    } else {
        let error = { 
            message: 'Invalid input value',
            statusCode: 500
         }
        //let error: any = new Error('Invalid value')
        let errorMessage = 'Invalid input value'
        //error.statusCode = 400
        next (error)
    }
}
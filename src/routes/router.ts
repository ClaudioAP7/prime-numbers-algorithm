import { Router } from 'express'
import { primes } from '../controllers/generatePrime'
import { validateInput }  from '../middleware/validate'

const router: Router = Router()

router.get('/:number', validateInput, primes.getPrimes)

export default router
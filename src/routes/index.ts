import { Router } from 'express'
import { indexController } from '../controllers/indexController'
import { validateInput }  from '../middleware/validate'

const router: Router = Router()

router.get('/:number', validateInput, indexController.index)

export default router
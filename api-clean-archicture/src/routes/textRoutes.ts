import { Router } from 'express';
import { createTextController, listTextsController } from '../controllers/textController';

const router = Router();

router.post('/create-text', createTextController);
router.get('/texts', listTextsController);

export default router;
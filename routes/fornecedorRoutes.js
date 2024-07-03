// routes/fornecedorRoutes.js
import { Router } from 'express';
import { createFornecedor, getFornecedores } from '../controllers/fornecedorController.js';

const router = Router();

router.post('/', createFornecedor);
router.get('/', getFornecedores);

export default router;

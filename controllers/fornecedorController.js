// controllers/fornecedorController.js
import Fornecedor from '../models/Fornecedor.js';

export const createFornecedor = async (req, res) => {
  const { name, cnpj } = req.body;

  try {
    const newFornecedor = new Fornecedor({
      name,
      cnpj,
    });

    const fornecedor = await newFornecedor.save();
    res.json(fornecedor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const getFornecedores = async (req, res) => {
  try {
    const fornecedores = await Fornecedor.find();
    res.json(fornecedores);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

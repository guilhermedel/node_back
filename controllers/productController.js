// controllers/productController.js
import Product from '../models/Product.js';

export const createProduct = async (req, res) => {
  const { ativo, descricao, idFornecedor, imagens, nome, preco } = req.body;

  try {
    const newProduct = new Product({
      ativo,
      descricao,
      idFornecedor,
      imagens,
      nome,
      preco,
    });

    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const updateProduct = async (req, res) => {
  const { ativo, descricao, idFornecedor, imagens, nome, preco } = req.body;

  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    product.ativo = ativo;
    product.descricao = descricao;
    product.idFornecedor = idFornecedor;
    product.imagens = imagens;
    product.nome = nome;
    product.preco = preco;

    await product.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    await product.remove();
    res.json({ msg: 'Product removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

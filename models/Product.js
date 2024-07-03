// models/Product.js
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  ativo: {
    type: Boolean,
    default: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  imagens: [{
    type: String,
  }],
  nome: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model('Product', ProductSchema);
export default Product;

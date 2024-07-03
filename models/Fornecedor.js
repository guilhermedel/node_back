// models/Fornecedor.js
import mongoose from 'mongoose';

const FornecedorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: true,
  },
});

const Fornecedor = mongoose.model('Fornecedor', FornecedorSchema);
export default Fornecedor;

// server.js
import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import fornecedorRoutes from './routes/fornecedorRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    app.use(cors());
    next();
  });

// Conectar ao MongoDB
connectDB();

// Middleware para analisar o corpo da requisição
app.use(express.json());

// Rotas
app.use('/api/auth',authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/fornecedores', fornecedorRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

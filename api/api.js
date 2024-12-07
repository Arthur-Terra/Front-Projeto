const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5287; // Porta ajustada para corresponder à URL fornecida

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simulando um banco de dados em memória
let livros = [];
let idCounter = 1;

// Rotas
// GET: Retorna todos os livros
app.get('/api/Biblioteca', (req, res) => {
    res.json(livros);
});

// POST: Adiciona um novo livro
app.post('/api/Biblioteca', (req, res) => {
    const { title, author, year } = req.body;

    if (!title || !author || !year) {
        return res.status(400).json({ error: 'Título, autor e ano são obrigatórios!' });
    }

    const novoLivro = {
        id: idCounter++,
        title,
        author,
        year,
    };
    livros.push(novoLivro);

    res.status(201).json(novoLivro);
});

// DELETE: Remove um livro pelo ID
app.delete('/api/Biblioteca/:id', (req, res) => {
    const { id } = req.params;
    const livroIndex = livros.findIndex((livro) => livro.id === parseInt(id));

    if (livroIndex === -1) {
        return res.status(404).json({ error: 'Livro não encontrado!' });
    }

    livros.splice(livroIndex, 1);
    res.status(204).send(); // Sem conteúdo
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/api/Biblioteca`);
});

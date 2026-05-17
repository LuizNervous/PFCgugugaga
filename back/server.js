require('dotenv').config();
const express=require('express');
const cors=require('cors');
const mysql=require('mysql2');


const app=express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME,
    ssl: {
    rejectUnauthorized: false 
  }
});
db.connect((err) => {
    if (err) {
        console.error('Erro de conexão:', err.message);
        return;
    }
    console.log('Conectado ao banco de dados com sucesso!');
});

app.get('/api/pontos',(req,res)=>{
    const query=`
    SELECT p.*, c.nome AS categoria_nome
    FROM pontos p
    JOIN categorias c ON p.id_categoria = c.id`;
    db.query(query,(erro, results)=>{
        if (erro) {
            return res.status(500).json(erro);  
        };
        res.json(results);
    });
});

app.listen(3000, ()=> console.log("servidor rodando na porta 3000"));
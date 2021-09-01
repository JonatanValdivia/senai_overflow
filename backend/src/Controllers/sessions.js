const jwt = require('jsonwebtoken'); //Importando o token
const auth = require('../config/auth');
const User = require ("../models/User");
const bcrypt = require('bcryptjs');
module.exports = {
    async store(req, res){
        const { email, password } = req.body; //desestruturação

        //Precisamos verificar se o usuário existe;

        //select * from where email = '';
        const user = await User.findOne({ //Procurando apenas UM usuário
            where:{
                email: email //procurando um usuário onde o email do banco seja igual ao que fora passado como parâmetro

            }

        })
        //se a senha está correta;
        if(!user || !bcrypt.compareSync(password, user.password)){ //caso não exista este usuário (email inexistente)

            return res.status(403)//status code de usuário não encontrado
                .send({error: "Usuário e/ou senha inválidos"}); //Mensagem de erro
        }

        //gerar um token;
            //sign -> gera o token
        const token = jwt.sign({ userId: user.id }, 
                auth.secret, 
                {
                    expiresIn: "1h"
                }
        );

        //enviar a resposta.
        res.send({
            user: {
                ra: user.ra,
                email: user.email,
                name:  user.name
            },
            token
        })
    }
}
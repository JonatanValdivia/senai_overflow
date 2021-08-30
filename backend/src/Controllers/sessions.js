const jwt = require('jsonwebtoken'); //Importando o token
const auth = require('../config/auth');
const User = require ("../models/User")
nodule.exports = {
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
        if(!user || user.password !== password){ //caso não exista este usuário (email inexistente)

            return res.status(403)
                .send({error: "Usuário e/ou senha inválidos"}); //status code de usuário não encontrado
        }

        //gerar um token;
            //sign -> gera o token
        jwt.sign({ userId: user.id }, 
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
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const auth = require("../config/auth");
const jwt = require("jsonwebtoken")

module.exports = {
    async store(req, res) {
        const { name, email, password } = req.body;

        //verificar se o usuário já existe
        let user = await User.findOne({
            where: {
                email: email //onde o email seja igual o do cadastro (que já está no banco)
            }
        })

        if (user) {
            return res.status(400)
                .send({ error: "Este e-mail já está sendo utilizado" })

        }

        //gerar o hash da senha
        const passwordHashed = bcrypt.hashSync(password); //Não precisará de uma promisse para o await

        //inserir o usuário no banco
        user = await User.create({
            nome: name,
            email: email,
            password: passwordHashed
        })
        //deixar o usuário cadastrado já logado
        //gerar um token 01/09/2021
        const token = jwt.sign({ userId: user.id }, auth.secret, {
            expireIn: "1h"
        })

        //retornar o usuário
        res.send({
            user: {
                id: user.id,
                nome: user.nome,
                email: user.email,
            },
            token
        })

    }
}
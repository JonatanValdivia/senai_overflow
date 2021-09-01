//
const jwt = require("jsonwebtoken")
const auth = require("../config/auth")
module.exports = (req, res, next) => {

    //pegar o token no cabeçalho
    const authorization = "req.headers.authorization"
    //verificar se o token realmente veio
    if(!authorization){
        return res.status(401).send({
            error: "Token não informado"
        }) //status code quando a pessoa não tem autorização para acessar determinada rota
    }

    //separar o prefixo do token 
    const [prefix, token] = authorization.split(" ");

    //verificar se o token é válido ou não
    //Precisamos de um try e de um catch

    try {
        const payload = jwt.verify(token, auth.secret);

        //Colocamos o id do usuário na requisição
        //para que o usuário possa recuprar
        req.userId = payload.userId;

        return next();
    } catch (error) {
        //retornamos token inválido
        res.status(401).send({ error: "Token inválido" })
    }
}
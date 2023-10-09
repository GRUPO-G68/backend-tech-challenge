const valideBody = (req, res, next) => {
    const {body} = req
    if(body.nome === '' ) {
        return res.status(400).json({message:"Nome Não pode ser vazio"})
    }
    if(body.nome === undefined ) {
        return res.status(400).json({message:"Campo nome é obrigatrio"})
    }
    if(body.cpf === '' ) {
        return res.status(400).json({message:"cpf Não pode ser vazio"})
    }
    if(body.cpf === undefined ) {
        return res.status(400).json({message:"Campo cpf é obrigatrio"})
    }

    next()
}

export default {
    valideBody
}
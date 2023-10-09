const valideBody = (req, res, next) => {
  const { body } = req;
  if (body.nome === "") {
    return res.status(400).json({ message: "Nome Não pode ser vazio" });
  }
  if (body.nome === undefined) {
    return res.status(400).json({ message: "Campo nome é obrigatrio" });
  }
  if (body.cpf === "") {
    return res.status(400).json({ message: "Campo cpf Não pode ser vazio" });
  }
  if (body.cpf === undefined) {
    return res.status(400).json({ message: "Campo cpf é obrigatrio" });
  }
  if (body.ctps === "") {
    return res
      .status(400)
      .json({ message: "Campo carteira de trabalho Não pode ser vazio" });
  }
  if (body.ctps === undefined) {
    return res
      .status(400)
      .json({ message: "Campo carteira de trabalho é obrigatrio" });
  }
  // CARTEIRA DE TRABALHO
  // Número
  if (body.ctps_numero == "") {
    return res.status(400).json({
      message: "Campo número de carteira de trabalho não pode ser vazio",
    });
  }
  if (body.ctps_numero == undefined) {
    return res.status(400).json({
      message: "Campo número de carteira de trabalho nnao pode ser vazio",
    });
  }
  // Série
  if (body.ctps_serie == "") {
    return res.status(400).json({
      message: "Campo série de carteira de trabalho não pode ser vazio",
    });
  }
  if (body.ctps_serie == undefined) {
    return res.status(400).json({
      message: "Campo série de carteira de trabalho nnao pode ser vazio",
    });
  }
  //Emissão
  if (body.ctps_emissao == "") {
    return res.status(400).json({
      message: "Campo emissão de carteira de trabalho não pode ser vazio",
    });
  }
  if (body.ctps_emissao == undefined) {
    return res.status(400).json({
      message: "Campo emissão de carteira de trabalho nnao pode ser vazio",
    });
  }
  // DATA DE CONTRATACAO
  if (body.data_inicio === "") {
    return res
      .status(400)
      .json({ message: "Campo data de início Não pode ser vazio" });
  }
  if (body.data_inicio === undefined) {
    return res
      .status(400)
      .json({ message: "Campo data de início é obrigatrio" });
  }

  next();
};

export default {
  valideBody,
};

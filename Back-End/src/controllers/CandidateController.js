const Candidate = require('../models/Candidate');

module.exports = {
    async register(req, res) {
        const { nome, dataDeNascimento, cargoPretendido, estadoCivil, genero, endereco, email, celular, telefoneFixo, contato, identidade, cpf, veiculo, habilitacao } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.dataDeNascimento = dataDeNascimento;
        newCandidate.cargoPretendido = cargoPretendido;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.genero = genero;
        newCandidate.endereco = endereco;
        newCandidate.email = email;
        newCandidate.celular = celular;
        newCandidate.telefoneFixo = telefoneFixo;
        newCandidate.contato = contato;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.veiculo = veiculo;
        newCandidate.habilitacao = habilitacao;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Um erro inesperado ocorreu, tente novamente mais tarde')
            }
            
            return res.status(200).send(savedCandidate)
        });


    }
}
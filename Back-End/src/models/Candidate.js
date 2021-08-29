const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema ({
    nome: {type: String, unique: false, required: true, trim: true},
    dataDeNascimento: {type: Date, unique: false, required: true, trim: true},
    cargoPretendido: {type: String, unique: false, required: true, trim: true},
    estadoCivil: {type: String, unique: false, required: false, trim: true},
    genero: {type: String, unique: false, required: false, trim: true},
    endereco: {
    cep: {type: String, unique: false, required: true, trim: true},
    logradouro: {type: String, unique: false, required: true, trim: true},
    numero: {type: String, unique: false, required: true, trim: true},
    bairro: {type: String, unique: false, required: true, trim: true},
    cidade: {type: String, unique: false, required: true, trim: true},
    estado: {type: String, unique: false, required: true, trim: true}
    },
    email: {type: String, unique: true, required: true, trim: true},
    celular: {type: String, unique: true, required: true, trim: true},
    telefoneFixo: {type: String, unique: false, required: false, trim: true},
    contato: {type: String, unique: false, required: false, trim: true},
    identidade: {type: String, unique: true, required: true, trim: true},
    cpf: {type: String, unique: true, required: true, trim: true},
    veiculo: {type: String, unique: false, required: false, trim: true},
    habilitacao: {type: String, unique: false, required: false, trim: true}
},{
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema)
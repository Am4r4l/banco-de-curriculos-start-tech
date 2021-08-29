const fetch = require('node-fetch');

function validaCPF(cpf) {
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        var soma = 0
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i
        }

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        // Validação do primeiro digito
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        // Validação segundo digito
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        return true;
    }
}

function validacaoCPF() {
    let cpf = document.getElementById('cpf').value;

    let resultadoValidacao = validaCPF(cpf);

    if (!resultadoValidacao) {
        document.getElementById('erroCPF').style.display = 'block';
        document.getElementById('erroBlocoCPF').style.border = '.1875rem solid red';
        return false;
    } else {
        document.getElementById('erroCPF').style.display = 'none';
        document.getElementById('erroBlocoCPF').style.border = 'none';
        return true;
    }

}

const validaCEP = (cep) => cep.toString().length == 8;

let endereco = {
        cep: document.getElementById('cep').value,
        logradouro: document.getElementById('logradouro').value,
        numero: document.getElementById('numero').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value
}
const buscaCEP = async () => {
    LimpaEndereco();
    let validacao = false;
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (validaCEP(cep)) {
        const data = await fetch(url);
        const endereco = await data.json();
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('erroCEP').style.display = 'block';
            document.getElementById('cep').style.border = '.1875rem solid red';
            validacao = false;
        } else {
            document.getElementById('erroCEP').style.display = 'none';
            document.getElementById('cep').style.border = 'none';
            completaEndereco(endereco);
            validacao = true;
        }
    } else {
        document.getElementById('erroCEP').style.display = 'block';
        document.getElementById('cep').style.border = '.1875rem solid red';
        validacao = false;
    }
    return validacao;
}

document.getElementById('cep').addEventListener('focusout', buscaCEP);

const completaEndereco = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const LimpaEndereco = () => {
    document.getElementById('endereco').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
}

const Formulario = () => {
    let form = {
        nome: document.getElementById('nome').value,
        cargoPretendido: document.getElementById('cargoPretendido').value,
        dataDeNascimento: document.getElementById('ano').value,
        estadoCivil: document.getElementById('estadoCivil').value,
        genero: document.getElementById('genero').value,
        cep: document.getElementById('cep').value,
        numero: document.getElementById('numero').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        celular: document.getElementById('celular').value,
        telefone: document.getElementById('telefoneFixo').value,
        email: document.getElementById('email').value,
        identidade: document.getElementById('identidade').value,
        cpf: document.getElementById('cpf').value,
        veiculo: document.getElementById('veiculo').value,
        habilitacao: document.getElementById('habilitacao').value,
    };
    console.log(form);
    return form
}

const createCandidate = async (candidate) => {
    const require = await fetch('api-banco-curriculos.herokuapp.com/register', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Formulario())
    });
}

if (requisicao.status === 200) {
    alert('Usuário Cadastrado!');
}

else if (requisicao.status === 500) {
    alert('CPF, Email ou Identidade já cadastrados');
}


function check_form() {
    let nome = document.getElementById('nome').value;
    let cargoPretendido = document.getElementById('cargoPretendido').value;
    let dataDeNascimento = document.getElementById('dataDeNascimento').value;
    let cep = document.getElementById('cep').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let celular = document.getElementById('celular').value;
    let email = document.getElementById('email').value.mata;
    let identidade = document.getElementById('identidade').value;

if (nome == "" || cargoPretendido == "" || dataDeNascimento !== Date || cep == "" || logradouro == ""
        || numero == "" || bairro == "" || cidade == "" || estado == "" || celular == "" ||
        email == false || identidade == "" || cpf == "") {
        alert('Por favor, preencha todos os campos corretamente.');
    } else {
        criarCandidato();
        alert('Cadastrando usuário...');
    }
}

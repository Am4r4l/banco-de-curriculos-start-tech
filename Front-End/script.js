const validaCEP = (cep) => cep.toString().length == 8;

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

if (require.status === 200) {
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

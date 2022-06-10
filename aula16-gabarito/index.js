let arrDespesas = [];
imprimirDespesas(arrDespesas);
imprimirExtrato();

// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas');
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>';

    // AQUI VEM A IMPLEMENTAÇÃO 
    // *Percorrre o array(Despesas), compara se é igual...*
    // *Se for igual adiciona altera o valor pego no get...*
//_____________________________________________________________//   
    despesas.forEach(despesa => {
        divDespesas.innerHTML +=` Valor: R$${despesa.valor} |
        Tipo: ${despesa.tipo} | Descricao: ${despesa.descricao}`
        }); 
//______________________________________________________________//
}

// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato');
    let gastoTotal = 0;
    let gastoAlimentacao = 0;
    let gastoUtilidades = 0;
    let gastoViagem = 0;

    // AQUI VEM A IMPLEMENTAÇÃO
    // *Verifica o tipo de despesa e retorna seu valor no extrato.*
//________________________________________________________________//
    arrDespesas.forEach((despesa) => {
        if (despesa.tipo === "alimentação") {
            gastoAlimentacao += despesa.valor;
        } else if (despesa.tipo === "utilidades") {
            gastoUtilidades += despesa.valor;
        } else {
            gastoViagem += despesa.valor;
        }

        gastoTotal = gastoAlimentacao + gastoUtilidades + gastoViagem
  });

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
    Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`;
//____________________________________________________________________//
}

function limparFiltros() {
    document.getElementById('tipoFiltro').value = "";
    document.getElementById('valorFiltroMin').value = "";
    document.getElementById('valorFiltroMax').value = "";
}

function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro');
    let tipoCtd = document.getElementById('tipoCadastro');
    let descricaoCtd = document.getElementById('descricaoCadastro');

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa);
        
        valorCdt.value = "";
        tipoCtd.value = "";
        descricaoCtd.value = "";

        limparFiltros();
        imprimirDespesas(arrDespesas);
        imprimirExtrato();
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`");
    }
}

// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value;
    let valorMin = Number(document.getElementById('valorFiltroMin').value);
    let valorMax = Number(document.getElementById('valorFiltroMax').value);

    // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO
    // *Filtra a despesa de acordo com o que doi selececionado*
    // *Podendo retornar a dispeza total ou por categoria*
//_________________________________________________________________________________//
    let despesasFiltradas =  arrDespesas.filter((despesa)=>{
        if ((despesa.tipo === tipoFiltro) && (despesa.valor >= valorMin) && (despesa.valor <= valorMax)) {
            return true;
        }  else {
            return false;
        }
    });
    imprimirDespesas(despesasFiltradas);
//___________________________________________________________________________________//

}

// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true;
    }
    return false;
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true;
    }
    return false;
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true;
    }
    return false;
}
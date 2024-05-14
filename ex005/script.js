

const textoOperacaoAnterior = document.querySelector("#previous-operation");
const textoOperacaoAtual = document.querySelector("#current-operation");
const botoes = document.querySelectorAll("#buttons-container button");

class Calculadora {
  constructor(textoOperacaoAnterior, textoOperacaoAtual) {
    this.textoOperacaoAnterior = textoOperacaoAnterior;
    this.textoOperacaoAtual = textoOperacaoAtual;
    this.operacaoAtual = "";
  }

  // Adiciona dígito à tela da calculadora
  adicionarDigito(digito) {
    console.log(digito);
    // Verifica se o número já possui um ponto
    if (digito === "." && this.textoOperacaoAtual.innerText.includes(".")) {
      return;
    }

    this.operacaoAtual = digito;
    this.atualizarTela();
  }

  // Processa todas as operações da calculadora
  processarOperacao(operacao) {
    // Verifica se o valor atual está vazio
    if (this.textoOperacaoAtual.innerText === "" && operacao !== "C") {
      // Altera operação
      if (this.textoOperacaoAnterior.innerText !== "") {
        this.alterarOperacao(operacao);
      }
      return;
    }

    // Obtém os valores atual e anterior
    let valorOperacao;
    let anterior = +this.textoOperacaoAnterior.innerText.split(" ")[0];
    let atual = +this.textoOperacaoAtual.innerText;

    switch (operacao) {
      case "+":
        valorOperacao = anterior + atual;
        this.atualizarTela(valorOperacao, operacao, atual, anterior);
        break;
      case "-":
        valorOperacao = anterior - atual;
        this.atualizarTela(valorOperacao, operacao, atual, anterior);
        break;
      case "*":
        valorOperacao = anterior * atual;
        this.atualizarTela(valorOperacao, operacao, atual, anterior);
        break;
      case "/":
        valorOperacao = anterior / atual;
        this.atualizarTela(valorOperacao, operacao, atual, anterior);
        break;
      case "DEL":
        this.processarOperadorDel();
        break;
      case "CE":
        this.processarLimparOperadorAtual();
        break;
      case "C":
        this.processarLimparOperador();
        break;
      case "=":
        this.processarOperadorIgual();
        break;
      default:
        return;
    }
  }

  // Altera valores da tela da calculadora
  atualizarTela(
    valorOperacao = null,
    operacao = null,
    atual = null,
    anterior = null
  ) {
    if (valorOperacao === null) {
      // Adiciona número ao valor atual
      this.textoOperacaoAtual.innerText += this.operacaoAtual;
    } else {
      // Verifica se o valor é zero, se for, adiciona apenas o valor atual
      if (anterior === 0) {
        valorOperacao = atual;
      }
      // Adiciona valor atual ao anterior
      this.textoOperacaoAnterior.innerText = `${valorOperacao} ${operacao}`;
      this.textoOperacaoAtual.innerText = "";
    }
  }

  // Altera operação matemática
  alterarOperacao(operacao) {
    const operacoesMatematicas = ["*", "-", "+", "/"];

    if (!operacoesMatematicas.includes(operacao)) {
      return;
    }

    this.textoOperacaoAnterior.innerText =
      this.textoOperacaoAnterior.innerText.slice(0, -1) + operacao;
  }

  // Exclui um dígito
  processarOperadorDel() {
    this.textoOperacaoAtual.innerText =
      this.textoOperacaoAtual.innerText.slice(0, -1);
  }

  // Limpa operação atual
  processarLimparOperadorAtual() {
    this.textoOperacaoAtual.innerText = "";
  }

  // Limpa todas as operações
  processarLimparOperador() {
    this.textoOperacaoAtual.innerText = "";
    this.textoOperacaoAnterior.innerText = "";
  }

  // Processa uma operação
  processarOperadorIgual() {
    let operacao = this.textoOperacaoAnterior.innerText.split(" ")[1];

    this.processarOperacao(operacao);
  }
}

const calculadora = new Calculadora(textoOperacaoAnterior, textoOperacaoAtual);

botoes.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const valor = e.target.innerText;

    if (+valor >= 0 || valor === ".") {
      console.log(valor);
      calculadora.adicionarDigito(valor);
    } else {
      calculadora.processarOperacao(valor);
    }
  });
});

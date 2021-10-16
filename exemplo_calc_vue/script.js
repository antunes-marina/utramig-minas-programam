/* CRIAÇÃO OBJETO VUE - INICIO */
var app = new Vue({
  el: "#app",
  
  /* CRIAÇÃO DAS VARIAVEIS/CONSTANTES - INICIO */
  data: {
    isLastInputANumber: false,
    isResultDisplayed: false,
    inputValues: [
      "C",
      "/",
      "7",
      "8",
      "9",
      "*",
      "4",
      "5",
      "6",
      "-",
      "1",
      "2",
      "3",
      "+",
      "0",
      "00",
      ".",
      "=",
    ],
    screenValue: "",
  },
  /* CRIAÇÃO DAS VARIAVEIS/CONSTANTES - FIM */
  
  /* CRIAÇÃO DOS METODOS/FUNCIONALIDADES - INICIO */
  methods: {
	/* LIMPA TELA/VISOR DA CALCULADORA - INICIO */  
    clearScreen() {
      this.isLastInputANumber = false;
      this.isResultDisplayed = false;
      this.screenValue = "";
    },
	/* LIMPA TELA/VISOR DA CALCULADORA - FIM */
    
	/* VERIFICA E LER OPERADOR DIGITADO - INICIO */
	inputOperator(inputValue) {
      if (this.isLastInputANumber) {
        this.screenValue += inputValue;
        this.isLastInputANumber = false;
        this.isResultDisplayed = false;
      }
    },
	/* VERIFICA E LER OPERADOR DIGITADO - FIM */
	
	/* VERIFICA E LER O NUMERO DIGITADO - INICIO */
    inputNumber(inputValue) {
      if (this.isResultDisplayed) {
        this.screenValue = inputValue;
        this.isResultDisplayed = false;
        this.isLastInputANumber = true;
      } else {
        this.screenValue += inputValue;
        this.isLastInputANumber = true;
      }
    },
	/* VERIFICA E LER O NUMERO DIGITADO - FIM */
	
	/* EXIBIÇÃO DE RESULTADO - CALCULADORA - INICIO */
	
    displayResult() {
      if (this.screenValue) {
        this.screenValue = math.evaluate(this.screenValue);
        this.isResultDisplayed = true;
      }
    },
	/* EXIBIÇÃO DE RESULTADO - CALCULADORA - FIM */
  },
  /* CRIAÇÃO DOS METODOS/FUNCIONALIDADES - FIM */
});
/* CRIAÇÃO OBJETO VUE - FIM */

function createCalc() {
  return {
    // Selecionar display
    display: document.querySelector(".display"),
    // Método para inicializar calculadora
    start() {
      this.btnClick();
      this.pressEnter();
    },
    // Método para receber o resultado ao pressionar enter
    pressEnter() {
      this.display.addEventListener("keyup", (event) => {
        if (event.keyCode == 13) {
          this.equal();
        }
      });
    },
    // Método para receber o resultado ao clicar no botão de igual
    equal() {
      let calc = this.display.value;

      try {
        calc = eval(calc);

        if (calc === "" || Number.isNaN(calc) || typeof calc != "number") {
          alert("Conta inválida");
          return;
        }
        this.display.value = String(calc);
      } catch (event) {
        alert("Conta inválida");
        return;
      }
    },
    // Método para limpar display ao clicar no botão Clear (C)
    clearDisplay() {
      this.display.value = "";
    },
    // Método para remover um caracter ao clicar no botão <<
    del() {
      this.display.value = this.display.value.slice(0, -1);
    },
    // Método para receber os clicks nos botões
    btnClick() {
      document.addEventListener("click", (event) => {
        const element = event.target;

        if (element.classList.contains("btn-num")) {
          this.btnToDisplay(element.innerText);
        }
        if (element.classList.contains("btn-clear")) {
          this.clearDisplay();
        }
        if (element.classList.contains("btn-del")) {
          this.del();
        }
        if (element.classList.contains("btn-eq")) {
          this.equal();
        }
        this.display.focus();
      });
    },
    // Método para armazenar os clicks
    btnToDisplay(value) {
      this.display.value += value;
    },
  };
}

//Chamar a função
const calculator = createCalc();
calculator.start();

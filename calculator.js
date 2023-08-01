function createCalculator() {
  return {
    display: document.querySelector(".display"),

    start() {
      this.clickEnter();
      this.clickButtons();
    },

    clickEnter() {
      document.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          this.result();
        }
      });
    },

    clearDisplay() {
      this.display.value = "";
    },

    delOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    clickButtons() {
      document.addEventListener("mouseup", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) {
          this.btnNum(el.innerText);
        }
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }
        if (el.classList.contains("btn-del")) {
          this.delOne();
        }
        if (el.classList.contains("btn-eq")) {
          this.result();
        }
      });
    },

    result() {
      let count = this.display.value;
      try {
        count = eval(count);
        if (!count) {
          alert("Valor inválido");
          return;
        }
        this.display.value = String(count);
      } catch (e) {
        alert("Valor inválido");
        return;
      }
    },

    btnNum(valor) {
      this.display.value += valor;
    },
  };
}

const calculator = new createCalculator();
calculator.start();

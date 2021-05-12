function relogio() {
  function getTime(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  const relogio = document.querySelector(".relogio");
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");
  let seconds = 0;
  let timer;

  function startTimer() {
    timer = setInterval(function () {
      seconds++;
      relogio.innerHTML = getTime(seconds);
    }, 1000);
  }

  document.addEventListener("click", function (event) {
    const element = event.target;

    if (element.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      startTimer();
    }
    if (element.classList.contains("pausar")) {
      if (relogio.innerHTML != "00:00:00") {
        relogio.classList.add("pausado");
        clearInterval(timer);
      }
    }
    if (element.classList.contains("zerar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      seconds = 0;
    }
  });
}

relogio();

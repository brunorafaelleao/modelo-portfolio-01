alert("Bem vindo ao meu portfólio!");

// Código para o acordeão

const acordeons = document.querySelectorAll(".acordeon");

acordeons.forEach((acordeon) => {
  acordeon.addEventListener("click", () => {
    const body = acordeon.querySelector(".acordeon-body");
    body.classList.toggle("active");
  });
});

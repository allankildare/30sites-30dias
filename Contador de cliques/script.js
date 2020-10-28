var contadorDeCliques = document.getElementById("display")

document.getElementById("botaoContador").addEventListener('click', () => {
  let numero = parseInt(contadorDeCliques.textContent) + 1;
  contadorDeCliques.textContent = numero;
})

document.getElementById("reiniciar").addEventListener('click', () => {
    window.location.reload()
})
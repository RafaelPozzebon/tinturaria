const aParede = document.getElementById("alturaparede");
const lParede = document.getElementById("larguraparede");
const porta = document.getElementById("porta");
const aPorta = document.getElementById("alturaporta");
const lPorta = document.getElementById("larguraporta");
const janela = document.getElementById("janela");
const aJanela = document.getElementById("alturajanela");
const lJanela = document.getElementById("largurajanela");
const botao = document.getElementById("btncal");
const resultado = document.querySelector(".box2")

botao.addEventListener('click', () => {
    let pAl = Number(aParede.value);
    let pLar = Number(lParede.value);
    let portas = Number(porta.value);
    let portaLar = Number(lPorta.value);
    let portaAl = Number(aPorta.value);
    let janelas = Number(janela.value);
    let janelaLar = Number(lJanela.value);
    let janelaAl = Number(aJanela.value);

    let areaParede = (pAl * pLar);
    let areaPorta = portas * (portaLar * portaAl);
    let areaJanela = janelas * (janelaLar * janelaAl);
    let areaTotal = areaParede - (areaPorta + areaJanela);
    let rendi = areaTotal / 200;


    resultado.innerHTML = `Quantidade de tinta necessária: ${rendi}L para uma demão de tinta!`
})


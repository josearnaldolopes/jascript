import string from "./export.js" //importa a funcao Default
import { dataAtual } from "./export.js"; //importa a funcao não Default

const botao = document.querySelector("#botao")
botao.addEventListener("click", () => {
    string("Uma String para passar na ArrowFunction")
    dataAtual()
});
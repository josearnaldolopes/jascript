let data = new Date();
let string = (valor) => {console.log("String do export.js " + valor + " em " + data)}
let dataAtual = () => {console.log(data)}

export default string //exporta default
export {dataAtual} //exporta não default
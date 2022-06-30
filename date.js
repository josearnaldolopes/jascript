//Fonte: https://www.w3schools.com/js/js_date_methods_set.asp
const data = new Date()
console.log(data)
console.log(data.toString())
console.log(data.toUTCString())
console.log(data.toDateString())
console.log(data.toISOString())

const dataCompleta = new Date(2018, 11, 24, 10, 33, 30, 0)
console.log(dataCompleta)
    
const wrongMonth = new Date(2018, 15, 24, 10, 33, 30)
console.log(wrongMonth)

const rightMonth = new Date(2019, 3, 24, 10, 33, 30)
console.log(rightMonth)

const string = new Date("October 13, 2014 11:13:00")
console.log(string)

// ISO
const dateISO = new Date("2015-03-25")
console.log(dateISO)

const dateYM = new Date("2015-03")
console.log(dateYM)

const dateYear = new Date("2015")
console.log(dateYear)

// GET Methods
console.log(data.getFullYear())
console.log(data.getMonth())

const meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let month = meses[data.getMonth()]
console.log(month)

console.log("Dia de hoje: " + data.getDate())
console.log("Hora agora: " + data.getHours())
console.log("Minuto agora: " + data.getMinutes())
console.log("Segundos agora: " + data.getSeconds())
console.log("Millesegundos agora: " + data.getMilliseconds())
console.log("Dia da semana: " + data.getDay())

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[data.getDay()];
console.log(day)

// Set Methods
const newDate = new Date()
newDate.setFullYear(2032)
console.log(newDate)
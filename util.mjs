import util from "util";

const firstName = "Arief"
const lastName = "Maizaki"

// skrang udah ada ``
console.info(`Hello ${firstName} ${lastName}`)

// kalo dulu
console.info(util.format("Hello %s %s", firstName, lastName))

const person = {
    firstName: "Arief",
    lastName: "Maizaki",
}

// skrang
console.info(`Person : ${JSON.stringify(person)}` )
//dulu
console.info(util.format("Person : %j", person))

// https://nodejs.org/docs/v20.17.0/api/util.html
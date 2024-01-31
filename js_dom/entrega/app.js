import { segundaPagina } from "./main.js";
import { isValidNome, isValidCep, isValidEmail } from "./validacoes.js";
import "./form.js";

const root = document.getElementById("root")
const main = segundaPagina()
root.appendChild(main)


const valida = [isValidNome(), isValidCep(), isValidEmail()];
root.appendChild(valida)

let funcionario = [
  {id:1, nome: "César", habilitado: false},
  {id:2, nome: "Jéssica", habilitado: false},
  {id:3, nome: "Rena", habilitado: true},
  {id:4, nome: "Marlon", habilitado: false},
  {id:5, nome: "Julia", habilitado: false},
];

let contador = 0;
let encontrouHabilitado = false;

while (contador < funcionarios.length) {
  let funcionario = funcionarios[contador];

  if(funcionario.habilitado == true) {
    console.log("Funcionário habilitado encontrado")
    encontrouHabilitado = true;
    break;
  }
}
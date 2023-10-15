function capitalizeFolgas(folgas) {
    
    return folgas.map(function(dia) {
        dia.charAt(0).toUpperCase()
    })
}

const folgas = [
  "quinta-Feira",
  "Sexta-feira",
  "sábado",
  "Domingo",
  "segunda",
  "quarta",
  "Quarta-feira",
];

const capitalizadas = capitalizeFolgas(folgas);
console.log(capitalizadas)
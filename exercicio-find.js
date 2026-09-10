let listaUsuario = [
    { id:1, nome: "Lucas", ano_nasc: 1992},
    { id:2, nome: "Angelo", ano_nasc: 1995},
    { id:3, nome: "Ana", ano_nasc: 1990},
    { id:4, nome: "Carol", ano_nasc: 1998},
    { id:5, nome: "Matheus", ano_nasc: 1989},
    { id:6, nome: "Livia", ano_nasc: 1985}
];

for(i = 0; i < listaUsuario.length; i++) {
    let usuarioDaVez =  listaUsuario[i];
    if (usuarioDaVez.ano_nasc > 1993) {
        console.log("Encontrei o Usuario que nasceu depois de 1993");
        break;
    }
}

const usandoFind = listaUsuario.find((i) => i.ano_nasc > 1993);
console.log(`meu texto ${JSON.stringify(usandoFind)}`)


//=============== PROCURANDO PELA POSIÇÃO ================
for(i = 0; i < listaUsuario.length; i++) {
    let usuarioDaVez =  listaUsuario[i];
    if (usuarioDaVez.ano_nasc < 1990) {
        console.log(i);
        break;
    }
}

const usandoFindIndex = listaUsuario.findIndex((i) => i.ano_nasc < 1990);
console.log(usandoFindIndex)
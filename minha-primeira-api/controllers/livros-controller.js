let livros = [
  {
    idLivro: 1,
    dsTitulo: "as cronicas de narnia",
    dsAutor: "C S Lewis",
    fgDisponivel: true,
  },
];

let ultimoId = 1;

export function findAll() {
  return livros;
}
export function findOne(id) {
  let livro = livros.find((livro) => {
    return livro.idLivro === id;
  });

  return livro;
}
export function criarLivro(titulo, autor) {
  let novoId = ultimoId + 1;
  ultimoId++;

  let novo_livro = {
    idLivro: novoId,
    fgDisponivel: true,
    dsTitulo: titulo,
    dsAutor: autor,
  };

  livros.push(novo_livro);
  return novo_livro;
}

export function deletarLivro(id) {
  let index_livro = livros.findIndex((livro) => {
    return livro.idLivro === id;
  });

  livros.splice(index_livro, 1);
}

export function editarLivro(index_livro, novo_titulo, novo_autor) {
  let livro_a_ser_atualizado = livros[index_livro];

  if (novo_autor !== undefined) {
    livro_a_ser_atualizado.dsAutor = novo_autor;
  }

  if (novo_titulo !== undefined) {
    livro_a_ser_atualizado.dsTitulo = novo_titulo;
  }
  return livro_a_ser_atualizado;
}

export function buscarIndex(id) {
  let index_livro = livros.findIndex((livro) => {
    return livro.idLivro === id;    
  });
  return index_livro;
}

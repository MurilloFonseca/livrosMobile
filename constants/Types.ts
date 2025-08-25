export type Book = { 
    nome: string, 
    desc: string, 
    autor: string, 
    ano: string, 
    img: string,
    pagesTotal: string,
    pagesRead?: string
}

export type StackParams = {
  main: undefined;
  book: {livro: Book};
  searchResults: {livros: Book[]};
}
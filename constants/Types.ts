export type Book = { 
    nome: string, 
    desc: string, 
    autor: string, 
    ano: string, 
    img: string,
    pagesTotal: string,
    pagesRead?: string,
    link: string
}

export type StackParams = {
  index: undefined;
  book: {livro: Book};
  searchResults: {livros: Book[]};
}
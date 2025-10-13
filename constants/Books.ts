import { Book } from "./Types";

const iliada: Book = { 
    pagesTotal: '1000', 
    nome: "Ilíada", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus finibus ligula, vel cursus nisi. Vestibulum mattis nec turpis et porta. Nullam sit amet diam a nisi sodales viverra. Ut non ante lobortis, feugiat leo porta, blandit magna. Donec ultrices quis felis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus interdum facilisis faucibus. Cras vel scelerisque velit. In pellentesque orci eu ipsum vulputate finibus vel at dolor. Pellentesque suscipit molestie efficitur. Maecenas volutpat diam quis massa aliquet, non tincidunt nibh tristique. Suspendisse ac nisl consectetur, congue urna ac, porttitor dui.", 
    autor: "Homero", 
    ano: "séc. VIII a.C.", 
    img: "https://a-static.mlcdn.com.br/800x560/livro-iliada/magazineluiza/228539700/9e11c08aee2cca10e7a147459b39700f.jpg",
    link: 'https://www.google.com.br/books/edition/Il%C3%ADada/Acz2zwEACAAJ?hl=pt-BR'
}

const odisseia: Book = { 
    pagesTotal: '1200', 
    nome: "Odisseia", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus finibus ligula, vel cursus nisi. Vestibulum mattis nec turpis et porta. Nullam sit amet diam a nisi sodales viverra. Ut non ante lobortis, feugiat leo porta, blandit magna. Donec ultrices quis felis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus interdum facilisis faucibus. Cras vel scelerisque velit. In pellentesque orci eu ipsum vulputate finibus vel at dolor. Pellentesque suscipit molestie efficitur. Maecenas volutpat diam quis massa aliquet, non tincidunt nibh tristique. Suspendisse ac nisl consectetur, congue urna ac, porttitor dui.", 
    autor: "Homero", 
    ano: "séc. VIII a.C.", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj04i5f1mRXz4sqA9VVBDFeTh5LClr5LVdQw&s",
    link: 'https://www.google.com.br/books/edition/A_Odisseia/WxofEAAAQBAJ?hl=pt-BR&gbpv=0'
}

export const books = [iliada, odisseia]

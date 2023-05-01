import { Book } from "../../models/book/book-model";
import { TAG } from "../../utils/enums/book.enum";
import { CATEGORY } from "../../utils/enums/book.enum";

export const allBooks: Book[] =
  [
    {
      id: 1,
      title: "Un cuento perfecto",
      author: {
        name: "Elísabet Benavent"
      },
      img: "./assets/img/book-cover/un-cuento-perfecto.png",
      price: 6.677,
      description: "",
      publisher: {
        name: "Ivrea"
      },
      isbn: "",
      pageAmount: 100,
      language: "",
      genre: "infantil",
      releaseDate: new Date(),
      stock: 100,
      totalSold: 10,
      tags: [TAG.TOP_VENDIDOS]
    },
    {
      id: 2,
      title: "El camino del artista",
      author: {
        name: "Julia Cameron"
      },
      img: "./assets/img/book-cover/el-camino-del-artista.png",
      price: 8.637,
      description: "",
      publisher: {
        name: "Ivrea"
      },
      isbn: "",
      pageAmount: 100,
      language: "",
      genre: "arte gastronomia",
      releaseDate: new Date(),
      stock: 100,
      totalSold: 10,
      tags: [TAG.TOP_VENDIDOS]
    },
    {
      id: 3,
      title: "Violeta",
      author: {
        name: "Isabel Allende"
      },
      img: "./assets/img/book-cover/violeta.png",
      price: 6.472,
      description: "",
      publisher: {
        name: "Ivrea"
      },
      isbn: "",
      pageAmount: 100,
      language: "",
      genre: "juvenil",
      releaseDate: new Date(),
      stock: 100,
      totalSold: 10,
      tags: [TAG.TOP_VENDIDOS]
    },
    {
      id: 4,
      title: "Pensar a la Japonesa",
      author: {
        name: "Le Yen Mai"
      },
      img: "./assets/img/book-cover/pensar-a-la-japonesa.png",
      price: 7.567,
      description: "",
      publisher: {
        name: "Ivrea"
      },
      isbn: "",
      pageAmount: 100,
      language: "",
      genre: "negocio gastronomia",
      releaseDate: new Date(),
      stock: 100,
      totalSold: 10,
      tags: [TAG.TOP_VENDIDOS]
    },
    {
      id: 5,
      title: "Heartstopper",
      author: {
        name: "Alice Oseman"
      },
      img: "./assets/img/book-cover/heartstopper.png",
      price: 10.499,
      description: "",
      publisher: {
        name: "Ivrea"
      },
      isbn: "",
      pageAmount: 100,
      language: "",
      genre: "juvenil",
      releaseDate: new Date(),
      stock: 100,
      totalSold: 10,
      tags: [TAG.TOP_VENDIDOS]
    },
    {
      id: 6,
      title: "Sanar la herida",
      author: {
        name: "Claudia Luchetti"
      },
      img: "./assets/img/book-cover/sanar-la-herida.png",
      price: 7.129,
      description: "",
      publisher: {
        name: "Ivrea"
      },
      isbn: "",
      pageAmount: 100,
      language: "",
      genre: "juvenil",
      releaseDate: new Date(),
      stock: 100,
      totalSold: 10,
      tags: [TAG.RECOMENDADOS]
    },
    {
      id: 7,
      title: "Punk 57",
      author: {
        name: "Penelope Douglas"
      },
      img: "./assets/img/book-cover/punk-57.png",
      price: 3.698,
      description: "",
      publisher: {
        name: "Ivrea"
      },
      isbn: "",
      pageAmount: 100,
      language: "",
      genre: "arte",
      releaseDate: new Date(),
      stock: 100,
      totalSold: 10,
      tags: [TAG.NOVEDADES]
    },
    {
      id: 8,
      title: "Prisionero",
      author: {
        name: "Roma Damned"
      },
      img: "./assets/img/book-cover/prisionero.png",
      price: 8.268,
      description: "",
      publisher: {
        name: "Ivrea"
      },
      isbn: "",
      pageAmount: 100,
      language: "",
      genre: "ficcion",
      releaseDate: new Date(),
      stock: 100,
      totalSold: 10,
      tags: [TAG.NOVEDADES]
    },
    {
      id: 9,
      title: "Boulevard",
      author: {
        name: "Flor M. Salvador"
      },
      img: "./assets/img/book-cover/boulevard.png",
      price: 9.478,
      description: "",
      publisher: {
        name: "Ivrea"
      },
      isbn: "",
      pageAmount: 100,
      language: "",
      genre: "ficcion gastronomia",
      releaseDate: new Date(),
      stock: 100,
      totalSold: 10,
      tags: [TAG.NOVEDADES]
    },
    {
      id: 10,
      title: "La casa de las grietas",
      author: {
        name: "Krystal Sutherland"
      },
      img: "./assets/img/book-cover/la-casa-de-las-grietas.png",
      price: 6.788,
      description: "",
      publisher: {
        name: "Ivrea"
      },
      isbn: "",
      pageAmount: 100,
      language: "",
      genre: "juvenil",
      releaseDate: new Date(),
      stock: 100,
      totalSold: 10,
      tags: [TAG.NOVEDADES]
    },
    {
      id: 11,
      title: "Un linaje oscuro",
      author: {
        name: "Victoria Vilchez"
      },
      img: "./assets/img/book-cover/un-linaje-oscuro.png",
      price: 7.792,
      description: "",
      publisher: {
        name: "Ivrea"
      },
      isbn: "",
      pageAmount: 100,
      language: "",
      genre: "ficcion",
      releaseDate: new Date(),
      stock: 100,
      totalSold: 10,
      tags: [TAG.NOVEDADES]
    },
    {
      id: 12,
      title: "Todo por volver a verte",
      author: {
        name: "Florencia Vercellone"
      },
      img: "./assets/img/book-cover/todo-por-volver-a-verte.png",
      price: 5.098,
      description: "",
      publisher: {
        name: "Ivrea"
      },
      isbn: "",
      pageAmount: 100,
      language: "",
      genre: "infantil",
      releaseDate: new Date(),
      stock: 100,
      totalSold: 10,
      tags: [TAG.RECOMENDADOS]
    },
    {
      id: 13,
      title: "Buscando a Dorothy",
      author: {
        name: "Elizabeth Letts"
      },
      img: "./assets/img/book-cover/buscando-a-dorothy.png",
      price: 9.929,
      description: "",
      publisher: {
        name: "Ivrea"
      },
      isbn: "",
      pageAmount: 100,
      language: "",
      genre: "infantil",
      releaseDate: new Date(),
      stock: 100,
      totalSold: 10,
      tags: [TAG.RECOMENDADOS]
    },
    {
      id: 14,
      title: "Sigue mi voz",
      author: {
        name: "Ariana Godoy"
      },
      img: "./assets/img/book-cover/sigue-mi-voz.png",
      price: 5.067,
      description: "",
      publisher: {
        name: "Ivrea"
      },
      isbn: "",
      pageAmount: 100,
      language: "",
      genre: "negocio",
      releaseDate: new Date(),
      stock: 100,
      totalSold: 10,
      tags: [TAG.RECOMENDADOS]
    },
    {
      id: 15,
      title: "La teoría de lo perfecto",
      author: {
        name: "Sophie Gonzalez"
      },
      img: "./assets/img/book-cover/la-teoria-de-lo-perfecto.png",
      price: 4.367,
      description: "",
      publisher: {
        name: "Ivrea"
      },
      isbn: "",
      pageAmount: 100,
      language: "",
      genre: "negocio juvenil",
      releaseDate: new Date(),
      stock: 100,
      totalSold: 10,
      tags: [TAG.RECOMENDADOS]
    }
  ]
